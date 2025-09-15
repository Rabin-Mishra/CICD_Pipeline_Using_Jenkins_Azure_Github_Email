import { Injectable } from '@nestjs/common';

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  createdAt: Date;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Hello World',
      slug: 'hello-world',
      content: 'Welcome to my first blog post!',
      author: 'Rabin',
      createdAt: new Date(),
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(slug: string): Post | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  create(post: Post) {
    this.posts.push(post);
  }
}
