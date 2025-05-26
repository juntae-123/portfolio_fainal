import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Comment } from "./comment.entity";

@Entity("guestbook")
export class Guestbook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column("text")
  content: string;

  @Column({ default: 0 })
  likes: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @OneToMany(() => Comment, (comment) => comment.guestbook, {
    onDelete: "CASCADE",
  })
  comments: Comment[];
}
