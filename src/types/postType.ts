export enum PostTypeColor {
    yellow = 'yellow',
    green = 'green',
}

export interface PostType {
    id: number;
    name: string;
    typeColor: PostTypeColor;
}
