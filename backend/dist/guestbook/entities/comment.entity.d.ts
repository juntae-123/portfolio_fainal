import { Guestbook } from "./guestbook.entity";
export declare class Comment {
    id: number;
    author: string;
    content: string;
    createdAt: Date;
    guestbook: Guestbook;
}
