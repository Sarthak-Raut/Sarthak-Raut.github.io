import projectimage1 from "../assets/project1.png"
import projectimage2 from "../assets/project2.png"

export const aboutMe = "I'm a Software Development Engineer with a strong background in building robust, secure, and scalable systems. With a Bachelor in Computer Engineering from Mumbai University and currently pursuing a Master's in Computer Science at Virginia Tech, I have extensive experience in developing core system modules, automating test suites, and implementing cloud-based serverless workflows using AWS, Docker, and Kubernetes. I thrive on solving complex challenges and driving innovative projects.";

export const skills = {
  'Programming Languages': [
    'Python',
    'Java',
    'Go',
    'C/C++',
    'JavaScript',
    'TypeScript',
    'SQL',
    'Swift',
    'Kotlin',
    'Dart',
    'LUA',
    'Rust',
    'Ruby'
  ],

  'Frameworks & Libraries': [
    'React.js',
    'Vue.js',
    'React Native',
    'SwiftUI',
    'FastAPI',
    'Express.js',
    'Node.js',
    'Django',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'Ollama',
    'Transformers (Hugging Face)',
    'LangChain',
    'Flutter',
    'Firebase'
  ],

  'Databases': [
    'PostgreSQL',
    'MongoDB',
    'SQLite',
    'MySQL',
    'Redis'
  ],

  'Cloud & DevOps': [
    'AWS',
    'Docker',
    'Kubernetes',
    'Git',
    'CI/CD',
    'Jenkins',
    'Ansible',
    'Agile & Waterfalls Methodologies',
    'TDD',
    'BDD',
    'Unix/Linux'
  ]
};

export const experiences = [
  {
    company: "Version Next Technology Pvt. Ltd.",
    location: "Mumbai, India",
    timeline: [
      {
        period: "Jan 2023 - May 2024",
        role: "Software Development Engineer",
        projects: [
          {
            name: "Core Systems & Security",
            points: [
              "Engineered and maintained core system modules, increasing system throughput.",
              "Developed automated test suites reducing regression errors by 20%.",
              "Implemented a comprehensive security strategy with advanced logging tools, reducing incident response times.",
              "Refactored legacy code and optimized processes, cutting processing time.",
              "Developed serverless workflows with AWS Lambda and optimized container deployments using Docker & Kubernetes, reducing infrastructure costs by 20%."
            ]
          }
        ]
      }
    ]
  },
  {
    company: "NTR Trust",
    location: "Chennai, India",
    timeline: [
      {
        period: "Nov 2022 - Jan 2023",
        role: "DevOps Intern",
        projects: [
          {
            name: "Dashboard & CI/CD Integration",
            points: [
              "Built and maintained React-based dashboards for real-time data visualization.",
              "Designed and integrated CI/CD pipelines reducing deployment errors and increasing release frequency.",
              "Implemented AWS Lambda-based notifications and an event-driven architecture using Kafka.",
              "Configured AWS CloudWatch for performance monitoring and prompt issue resolution."
            ]
          }
        ]
      }
    ]
  },
  {
    company: "Mirae Asset Foundation",
    location: "Mumbai, India",
    timeline: [
      {
        period: "May 2022 - Aug 2022",
        role: "SDE Intern",
        projects: [
          {
            name: "Security & Encryption Enhancements",
            points: [
              "Reviewed system architecture to identify vulnerabilities, improving security by 10%.",
              "Investigated and resolved 12 security breaches, fortifying system security.",
              "Designed data encryption pipelines using AES-256 & RSA for securing transactions.",
              "Developed advanced security solutions including firewalls, encryption protocols, and access control systems."
            ]
          }
        ]
      }
    ]
  }
];

export const projects = [
  // Existing placeholder projects
  {
    id: 1,
    postId: 3,
    title: 'Random Project 1',
    short_description: 'A brief description of Random Project 1.',
    image: projectimage1,
    blog: '/blog/random-project-1',
    github: 'https://github.com/user/random-project-1',
    github2: 'https://github.com/user/random-project-1-backend',
    blog_markdown: '/src/assets/posts/random_project_1.md',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    id: 2,
    postId: null,
    title: 'Random Project 2',
    short_description: 'A brief description of Random Project 2.',
    image: projectimage2,
    blog: '',
    github: 'https://github.com/user/random-project-2',
    github2: '',
    blog_markdown: '',
    tags: ['Tag4', 'Tag5']
  },
  // Resume projects
  {
    id: 3,
    postId: null,
    title: 'AX Logistics',
    short_description: 'Engineered parcel allocation mechanisms, implemented load balancing with AWS services, and integrated a payment gateway and QR code scanner.',
    image: '', // Add an image path if available
    blog: '',
    github: '',
    github2: '',
    blog_markdown: '',
    tags: ['Java', 'Kotlin', 'Firebase', 'SQL']
  },
  {
    id: 4,
    postId: null,
    title: 'Nutriful',
    short_description: 'Developed a mobile app with Flutter and Firebase, implemented extensive testing and 2FA/MFA, optimizing performance for 10,000+ concurrent users.',
    image: '',
    blog: '',
    github: '',
    github2: '',
    blog_markdown: '',
    tags: ['Dart', 'Flutter', 'Firebase']
  },
  {
    id: 5,
    postId: null,
    title: 'm.Finance',
    short_description: 'Implemented security best practices, enabled deep linking and in-page analytics, and developed a certificate transparency library to enhance system security.',
    image: '',
    blog: '',
    github: '',
    github2: '',
    blog_markdown: '',
    tags: ['C++', 'Dart', 'Flutter', 'Firebase']
  }
];
