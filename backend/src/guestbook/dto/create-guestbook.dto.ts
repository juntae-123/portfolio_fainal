import { IsString, IsNotEmpty } from "class-validator";

export class CreateGuestbookDto {
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
