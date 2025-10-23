import { Post } from '../posts/post.entity';
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    posts: Post[];
}
