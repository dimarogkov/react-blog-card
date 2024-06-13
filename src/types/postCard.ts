import { PostType } from './postType';
import { User } from './user';

export interface PostCard {
    id: number;
    postImg: string;
    title: string;
    text: string;
    date: string;
    user: User;
    types: PostType[];
}
