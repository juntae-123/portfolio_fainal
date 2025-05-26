import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { Guestbook } from "./entities/guestbook.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const guestbook = await this.guestbookRepository.findOne({
      where: { id: createCommentDto.guestbookId },
    });

    if (!guestbook) {
      throw new Error("Guestbook not found");
    }

    const comment = this.commentRepository.create({
      ...createCommentDto,
      guestbook,
    });

    return await this.commentRepository.save(comment);
  }

  async findAll(guestbookId?: number) {
    if (guestbookId) {
      return await this.commentRepository.find({
        where: { guestbook: { id: guestbookId } },
        relations: ["guestbook"],
        order: { createdAt: "DESC" },
      });
    }
    return await this.commentRepository.find({
      relations: ["guestbook"],
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: number) {
    return await this.commentRepository.findOne({
      where: { id },
      relations: ["guestbook"],
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    await this.commentRepository.update(id, updateCommentDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    return await this.commentRepository.delete(id);
  }
}
