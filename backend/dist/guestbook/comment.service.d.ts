import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { Guestbook } from "./entities/guestbook.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
export declare class CommentService {
    private commentRepository;
    private guestbookRepository;
    constructor(commentRepository: Repository<Comment>, guestbookRepository: Repository<Guestbook>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(guestbookId?: number): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
