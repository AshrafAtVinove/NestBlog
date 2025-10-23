import { UsersService } from './users.service';
export declare class UsersController {
    private users;
    constructor(users: UsersService);
    get(id: number): Promise<import("./user.entity").User>;
}
