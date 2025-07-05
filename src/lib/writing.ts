export interface Post {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    tag: string;
}

export const posts: Post[] = [
    {
        id: 'the-art-of-subtlety',
        title: 'The Art of Subtlety in UI Design',
        date: 'October 26, 2024',
        excerpt: 'Exploring how micro-interactions and gentle animations can create a delightful user experience without overwhelming the user.',
        tag: 'Design'
    },
    {
        id: 'server-components-in-practice',
        title: 'Next.js Server Components in Practice',
        date: 'October 15, 2024',
        excerpt: 'A deep dive into leveraging React Server Components for performance and a better developer experience in modern web apps.',
        tag: 'Technology'
    },
    {
        id: 'building-a-brand-that-lasts',
        title: 'Building a Brand that Lasts',
        date: 'September 30, 2024',
        excerpt: 'Beyond the logo: a look into creating a brand identity that connects with people and stands the test of time.',
        tag: 'Strategy'
    },
    {
        id: 'the-future-is-composable',
        title: 'The Future is Composable',
        date: 'September 12, 2024',
        excerpt: 'Why we believe in a future built on composable architecture and how it empowers both developers and businesses.',
        tag: 'Technology'
    },
]
