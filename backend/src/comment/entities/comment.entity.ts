import { Guestbook } from "src/guestbook/entities/guestbook.entity";
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Column } from "typeorm";

@Entity()
export class Comment {
  //ID author content likes createdAt 참조 id
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 20 })
  author: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "int", default: 0 })
  likes: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Guestbook, (guestbook) => guestbook.comments, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "guestbookId" })
  guestbook: Guestbook;

  @Column()
  guestbookId: number;
}
