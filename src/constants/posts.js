import randompost1 from "../assets/posts/random-post-1.md"
import randompost2 from "../assets/posts/random-post-2.md"
import randompost3 from "../assets/posts/random-post-3.md"

export const posts = [
    {
        id: 1, 
        title: 'Random Post 1', 
        excerpt: 'A brief description of Random Post 1.',
        url: '/blog/random-post-1',
        source: randompost1, 
        date: '2024-11-20', 
        readingTime: '5 min read', 
        category: 'Random Category', 
        tags: ['Tag1', 'Tag2', 'Tag3'] 
    },
    {
        id: 2, 
        title: 'Random Post 2', 
        excerpt: 'A brief description of Random Post 2.',
        url: '/blog/random-post-2',
        source: randompost2, 
        date: '2024-12-15', 
        readingTime: '3 min read', 
        category: 'Another Category', 
        tags: ['Tag4', 'Tag5'] 
    },
    {
        id: 3, 
        title: 'Random Post 3', 
        excerpt: 'A brief description of Random Post 3.',
        url: '/blog/random-post-3',
        source: randompost3, 
        date: '2024-12-28', 
        readingTime: '8 min read', 
        category: 'Random Category', 
        tags: ['Tag1', 'Tag6', 'Tag7', 'Tag8'] 
    }
];