import { Guestbook } from "src/guestbook/entities/guestbook.entity";
export declare class Comment {
    id: number;
    author: string;
    content: string;
    likes: number;
    createdAt: Date;
    guestbook: Guestbook;
    guestbookId: number;
}
