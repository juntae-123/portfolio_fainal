// src/app.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestbookModule } from "./guestbook/guestbook.module";
import { Guestbook } from "./guestbook/entities/guestbook.entity";
import { Comment } from "./guestbook/entities/comment.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1234",
      database: "final",
      entities: [Guestbook, Comment],
      synchronize: true,
    }),
    GuestbookModule,
  ],
})
export class AppModule {}
