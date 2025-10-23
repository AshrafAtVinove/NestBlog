import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private users;
    private jwt;
    constructor(users: UsersService, jwt: JwtService);
    register(dto: {
        email: string;
        password: string;
        name: string;
    }): Promise<import("../users/user.entity").User>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
