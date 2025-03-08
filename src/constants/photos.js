import image1 from "../assets/photography/image-1.jpg"
import thumbnailimage1 from "../assets/photography/thumbnail-image-1.jpg"
import image2 from "../assets/photography/image-2.jpg"
import thumbnailimage2 from "../assets/photography/thumbnail-image-2.jpg"

export const photos = [
    {
      id: 1,
      src: image1,
      thumbnailSrc: thumbnailimage1,
      alt: 'Image 1',
      caption: 'Caption for Image 1',
      blog: '/src/assets/travelblog/1.md', // optional travel blog
      likes: 42,
      date: 'Jan 15, 2024',
      location: 'Tokyo, JP',
      orientation: 'portrait',
      tags: ['urban', 'architecture']
    },
    {
      id: 2,
      src: image2,
      thumbnailSrc: thumbnailimage2,
      alt: 'Image 2',
      caption: 'Caption for Image 2',
      blog: '', 
      likes: 28,
      date: 'Jan 10, 2024',
      location: 'Tokyo, JP',
      orientation: 'landscape',
      tags: ['urban', 'street']
    }
  ];