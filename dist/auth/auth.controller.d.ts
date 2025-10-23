import { AuthService } from './auth.service';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
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
