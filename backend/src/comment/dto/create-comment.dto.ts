import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty({ message: "작성자는 필수입력값입니다." })
  @MinLength(2, { message: "작성자는 2글자 이상이어야함" })
  @MaxLength(20, { message: "작성자는 20글자 이하여야함" })
  author: string;

  @IsString()
  @IsNotEmpty({ message: "내용 필수입력값입니다." })
  @MinLength(3, { message: "내용은 5글자 이상이어야함" })
  @MaxLength(100, { message: "내용은 500글자 이상이어야함" })
  content: string;

  @IsNumber()
  @IsNotEmpty({ message: "guestbookId 필수입력값입니다." })
  guestbookId: number;
}
