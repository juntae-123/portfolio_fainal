import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Repository } from "typeorm";
import { Guestbook } from "src/guestbook/entities/guestbook.entity";
import { Comment } from "./entities/comment.entity";
export declare class CommentService {
    private commentRepository;
    private guestbookRepository;
    constructor(commentRepository: Repository<Comment>, guestbookRepository: Repository<Guestbook>);
    createComment(dto: CreateCommentDto): Promise<Comment>;
    getByGuestbookId(guestbookId: number): Promise<Comment[]>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment | null>;
    findAllByGuestbookId(guestbookId: number): Promise<Comment[]>;
    update(id: number, dto: UpdateCommentDto): Promise<Comment | null>;
    remove(id: number): Promise<void>;
}
