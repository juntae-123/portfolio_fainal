import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { Comment } from "./entities/comment.entity";
import { GuestbookService } from "./guestbook.service";
import { GuestbookController } from "./guestbook.controller";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Guestbook, Comment])],
  controllers: [GuestbookController, CommentController],
  providers: [GuestbookService, CommentService],
  exports: [TypeOrmModule],
})
export class GuestbookModule {}
