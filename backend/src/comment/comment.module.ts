import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "@/guestbook/guestbook.module";
import { Comment } from "./entities/comment.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), GuestbookModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
