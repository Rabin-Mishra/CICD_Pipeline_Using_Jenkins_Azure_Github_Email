import { Controller, Get, Param, Render } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @Render('index')
  getAll() {
    return { posts: this.postsService.findAll(), title: 'My Blog' };
  }

  @Get('post/:slug')
  @Render('post')
  getOne(@Param('slug') slug: string) {
    const post = this.postsService.findOne(slug);
    return { post, title: post?.title || 'Post Not Found' };
  }
}
