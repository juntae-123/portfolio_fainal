import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Guestbook } from "src/guestbook/entities/guestbook.entity";
import { Comment } from "./entities/comment.entity";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>
  ) {}

  async createComment(dto: CreateCommentDto): Promise<Comment> {
    const guestbook = await this.guestbookRepository.findOneBy({
      id: dto.guestbookId,
    });

    if (!guestbook) throw new NotFoundException("Guestbook not found");

    const comment = this.commentRepository.create({
      author: dto.author,
      content: dto.content,
      guestbook, // 관계 연결
    });

    return await this.commentRepository.save(comment); // 👈 저장해야 DB에 반영됨
  }

  async getByGuestbookId(guestbookId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { guestbook: { id: guestbookId } },
      order: { createdAt: "ASC" },
    });
  }

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find({ relations: ["guestbook"] });
  }

  async findOne(id: number): Promise<Comment | null> {
    return this.commentRepository.findOne({
      where: { id },
      relations: ["guestbook"],
    });
  }

  async findAllByGuestbookId(guestbookId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { guestbook: { id: guestbookId } },
      order: { createdAt: "ASC" },
    });
  }

  async update(id: number, dto: UpdateCommentDto): Promise<Comment | null> {
    await this.commentRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
