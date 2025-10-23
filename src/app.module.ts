import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      // host: process.env.DATABASE_HOST || 'localhost',
      // port: +(process.env.DATABASE_PORT || 5432),
      // username: process.env.DATABASE_USER || 'postgres',
      // password: process.env.DATABASE_PASSWORD || 'postgres',
      // database: process.env.DATABASE_NAME || 'blog_db',
      entities: [User, Post],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, // Required for Supabase external connections
      },
    }),
    UsersModule,
    AuthModule,
    PostsModule,
  ],
})
export class AppModule {}
