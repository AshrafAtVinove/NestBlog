import { PostsService } from './posts.service';
export declare class PostsController {
    private posts;
    constructor(posts: PostsService);
    all(): Promise<import("./post.entity").Post[]>;
    create(dto: {
        title: string;
        content: string;
        authorId: number;
    }): Promise<import("./post.entity").Post>;
    update(id: string, dto: {
        title?: string;
        content?: string;
    }): Promise<import("./post.entity").Post>;
    remove(id: string): Promise<import("./post.entity").Post>;
}
