import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { GuestbookService } from "./guestbook.service";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
import { Guestbook } from "./entities/guestbook.entity";

@Controller("guestbook")
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Post()
  create(@Body() createGuestbookDto: CreateGuestbookDto): Promise<Guestbook> {
    return this.guestbookService.create(createGuestbookDto);
  }

  @Get()
  findAll(): Promise<Guestbook[]> {
    return this.guestbookService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Guestbook> {
    try {
      // ID가 유효한 숫자인지 확인
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        throw new HttpException(
          "유효하지 않은 방명록 ID입니다.",
          HttpStatus.BAD_REQUEST
        );
      }

      const guestbook = await this.guestbookService.findOne(parsedId);
      if (!guestbook) {
        throw new HttpException(
          `ID가 ${id}인 방명록을 찾을 수 없습니다.`,
          HttpStatus.NOT_FOUND
        );
      }
      return guestbook;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        "서버 오류가 발생했습니다.",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.guestbookService.remove(+id);
  }

  @Patch(":id/like")
  like(@Param("id") id: string): Promise<Guestbook> {
    return this.guestbookService.like(+id);
  }

  @Delete("reset")
  reset(): Promise<void> {
    return this.guestbookService.reset();
  }
}
