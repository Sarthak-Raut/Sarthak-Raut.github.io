import React, { useState, useRef, useEffect } from 'react';
import { X, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';
import { photos } from '../constants/photos';

const PhotoModal = ({ photo, onClose, sourceRect }) => {
  const modalRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalDimensions, setModalDimensions] = useState({ width: 0, height: 0 });
  const [showFullRes, setShowFullRes] = useState(false);


  const calculateModalDimensions = (imgWidth, imgHeight) => {
    const maxHeight = window.innerHeight * 0.85; // 85vh
    const maxWidth = window.innerWidth * 0.9;    // 90vw
    const captionHeight = 160;  // Approximate height for caption area
    const maxImageHeight = maxHeight - captionHeight;
    
    // Calculate scale based on maximum height
    const heightScale = maxImageHeight / imgHeight;
    const scaledWidth = imgWidth * heightScale;
    
    // If scaled width exceeds max width, scale based on width instead
    if (scaledWidth > maxWidth) {
      const widthScale = maxWidth / imgWidth;
      return {
        width: maxWidth,
        height: (imgHeight * widthScale) + captionHeight
      };
    }
    
    return {
      width: scaledWidth,
      height: maxHeight
    };
  };



  useEffect(() => {
    const handleImageLoad = () => {
      if (!imageRef.current) return;
      
      const { naturalWidth, naturalHeight } = imageRef.current;
      const dimensions = calculateModalDimensions(naturalWidth, naturalHeight);
      setModalDimensions(dimensions);
      setImageLoaded(true);

      // Set image dimensions
      imageRef.current.style.width = `${dimensions.width}px`;
      imageRef.current.style.height = `${dimensions.height - 160}px`; // Subtract caption height
    };

    if (imageRef.current) {
      if (imageRef.current.complete) {
        handleImageLoad();
      } else {
        imageRef.current.addEventListener('load', handleImageLoad);
      }
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  useEffect(() => {
    if (!sourceRect || !modalRef.current || !imageLoaded) return;
    
    const modalRect = modalRef.current.getBoundingClientRect();
    const scaleX = sourceRect.width / modalRect.width;
    const scaleY = sourceRect.height / modalRect.height;
    const translateX = sourceRect.left - modalRect.left;
    const translateY = sourceRect.top - modalRect.top;

    modalRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    modalRef.current.style.opacity = '1';

    requestAnimationFrame(() => {
      modalRef.current.style.transition = 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease-out';
      modalRef.current.style.transform = 'translate(0, 0) scale(1)';
      setTimeout(() => setAnimationComplete(true), 400);
    });
  }, [sourceRect, imageLoaded]);

  const handleZoom = () => {
    if (!imageRef.current || !sourceRect) return;
    
    const scale = isZoomed ? 1 : 1.5;
    const imageRect = imageRef.current.getBoundingClientRect();
    const sourceCenter = {
      x: sourceRect.left + sourceRect.width / 2,
      y: sourceRect.top + sourceRect.height / 2
    };
    const currentCenter = {
      x: imageRect.left + imageRect.width / 2,
      y: imageRect.top + imageRect.height / 2
    };
    
    const offsetX = (sourceCenter.x - currentCenter.x) * (scale - 1);
    const offsetY = (sourceCenter.y - currentCenter.y) * (scale - 1);

    imageRef.current.style.transition = 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)';
    imageRef.current.style.transform = isZoomed 
      ? 'scale(1) translate(0, 0)'
      : `scale(${scale}) translate(${offsetX/scale}px, ${offsetY/scale}px)`;
    
    setIsZoomed(!isZoomed);
  };

  const handleClose = () => {
    if (!modalRef.current || !sourceRect) return;
    
    setAnimationComplete(false);
    if (isZoomed) {
      imageRef.current.style.transform = 'scale(1) translate(0, 0)';
      setIsZoomed(false);
    }
    
    modalRef.current.style.transform = `translate(${sourceRect.left - modalRef.current.getBoundingClientRect().left}px, ${sourceRect.top - modalRef.current.getBoundingClientRect().top}px) scale(${sourceRect.width / modalRef.current.getBoundingClientRect().width}, ${sourceRect.height / modalRef.current.getBoundingClientRect().height})`;
    modalRef.current.style.opacity = '0';
    
    setTimeout(onClose, 400);
  };

  useEffect(() => {
    // Preload the full resolution image
    const fullResImage = new Image();
    fullResImage.src = photo.src;
    fullResImage.onload = () => {
      setShowFullRes(true);
    };
  }, [photo.src]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-colors duration-400"
      style={{
        backgroundColor: animationComplete ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: animationComplete ? 'blur(8px)' : 'blur(0px)'
      }}
      onClick={handleClose}
    >
      <div 
        ref={modalRef}
        className="relative bg-white dark:bg-black rounded-lg shadow-xl opacity-0"
        style={{ 
          width: modalDimensions.width || 'auto',
          height: modalDimensions.height || 'auto',
          maxHeight: '85vh',
          maxWidth: '90vw'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={handleZoom}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col h-full">
          <div ref={imageContainerRef} className="flex justify-center items-center overflow-hidden">
              {/* Show thumbnail while full res loads */}
              <img
                src={photo.thumbnailSrc}
                alt={photo.alt}
                className={`absolute transition-opacity duration-300 ${showFullRes ? 'opacity-0' : 'opacity-100'}`}
                style={{ objectFit: 'contain' }}
              />
              {/* Full resolution image */}
              <img
                ref={imageRef}
                src={photo.src}
                alt={photo.alt}
                className={`transition-all duration-300 ${showFullRes ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  objectFit: 'contain',
                  transformOrigin: 'center center'
                }}
              />
          </div>
          
          <div className="p-6 flex-shrink-0">
            <p className="text-lg text-gray-800 dark:text-gray-200">{photo.caption}</p>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{photo.date}</span>
              <span>{photo.location}</span>
              <span>♥ {photo.likes}</span>
            </div>
            {photo.blog && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Want to read more about this?</span>
                <a
                  href={photo.blog}
                  className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Read More <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LazyImage = ({ photo, onClick, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const fullImage = new Image();
    fullImage.src = photo.src;
    fullImage.onload = () => {
      setIsLoaded(true);
    };
  }, [isInView, photo.src]);

  return (
    <div ref={imageRef} className={`relative ${className}`}>
      {/* Thumbnail */}
      <img
        src={photo.thumbnailSrc}
        alt={photo.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* Full resolution image */}
      {isInView && (
        <img
          src={photo.src}
          alt={photo.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export const Hobby = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sourceRect, setSourceRect] = useState(null);
  const photoRefs = useRef({});

  const handlePhotoClick = (photo, id) => {
    const rect = photoRefs.current[id].getBoundingClientRect();
    setSourceRect(rect);
    setSelectedPhoto(photo);
  };

  return (
    <div className="w-full py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">Photography</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            ref={el => photoRefs.current[photo.id] = el}
            className="group flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-square w-full overflow-hidden">
              <LazyImage
                photo={photo}
                onClick={() => handlePhotoClick(photo, photo.id)}
                className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-4 flex-grow bg-white dark:bg-black">
              <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                {photo.caption}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {photo.date}
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  ♥ {photo.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => {
            setSelectedPhoto(null);
            setSourceRect(null);
          }}
          sourceRect={sourceRect}
        />
      )}
    </div>
  );
};