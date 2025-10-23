import { Post } from './post.entity';
import { Repository } from 'typeorm';
export declare class PostsService {
    private repo;
    constructor(repo: Repository<Post>);
    create(post: Partial<Post>): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    update(id: number, data: Partial<Post>): Promise<Post>;
    remove(id: number): Promise<Post>;
}
