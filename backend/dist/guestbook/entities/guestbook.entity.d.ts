import { Comment } from "./comment.entity";
export declare class Guestbook {
    id: number;
    author: string;
    content: string;
    likes: number;
    createdAt: Date;
    comments: Comment[];
}
