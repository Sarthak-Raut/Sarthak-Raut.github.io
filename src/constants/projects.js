import projectimage1 from "../assets/project1.png"
import projectimage2 from "../assets/project2.png"
import projectimage3 from "../assets/project3.png"

export const projects = [
  {
    id: 1,
    postId: null,
    title: 'AX Logistics',
    short_description: 'Engineered parcel allocation mechanisms that reduced driver idle time by 60 minutes per shift while sustaining on-time delivery rates above 95%. Implemented load balancing using AWS and integrated a payment gateway with a QR code scanner.',
    image: projectimage1,
    app: 'https://play.google.com/store/apps/details?id=com.vnt.axlpl.messenger',
    blog: 'https://www.axlpl.com',
    github: '',
    github2: '',
    blog_markdown: '',
    tags: ['Java', 'Kotlin', 'Firebase', 'SQL']
  },
  {
    id: 2,
    postId: null,
    title: 'Nutriful',
    short_description: 'Developed a Flutter-based mobile app with over 50 unit, integration, and performance tests to ensure 99% quality. Improved load times by 35% and scaled the app to support 10,000+ concurrent users.',
    image: projectimage2,
    app: 'https://play.google.com/store/apps/details?id=com.nutriful.user',
    blog: 'https://www.nutriful.fit/',
    github: '',
    github2: '',
    blog_markdown: '',
    tags: ['Dart', 'Flutter', 'Firebase', 'Jira', 'GitHub']
  },
  {
    id: 3,
    postId: null,
    title: 'm.Finance',
    short_description: 'Implemented robust security best practices and designed a certificate transparency library that prevents man-in-the-middle attacks, reducing system errors by 20%.',
    image: projectimage3,
    app: 'https://play.google.com/store/apps/details?id=com.nucleus.mirae.finance',
    blog: 'https://www.am.miraeasset.com/',
    github: '',
    github2: '',
    blog_markdown: '',
    tags: ['C++', 'Dart', 'Flutter', 'Firebase']
  },
];