import { PostCard } from '../types/postCard';
import { PostTypeColor } from '../types/postType';

export const postCard: PostCard = {
    id: 0,
    postImg: 'post_img.svg',
    title: 'HTML & CSS foundations',
    text: 'These languages are the backbone of every website, defining structure, content, and presentation.',
    date: 'Published 21 Dec 2023',
    types: [
        {
            id: 0,
            name: 'New',
            typeColor: PostTypeColor.green,
        },
        {
            id: 1,
            name: 'Learning',
            typeColor: PostTypeColor.yellow,
        },
    ],
    user: {
        id: 0,
        fullName: 'Greg Hooper',
        img: { src: 'user.webp', alt: 'user_img' },
    },
};
