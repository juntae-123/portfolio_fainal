import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";

@Injectable()
export class GuestbookService {
  private readonly logger = new Logger(GuestbookService.name);

  constructor(
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>
  ) {}

  async create(createGuestbookDto: CreateGuestbookDto): Promise<Guestbook> {
    const guestbook = this.guestbookRepository.create(createGuestbookDto);
    return await this.guestbookRepository.save(guestbook);
  }

  async findAll(): Promise<Guestbook[]> {
    return await this.guestbookRepository.find({
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: number): Promise<Guestbook> {
    try {
      this.logger.log(`Attempting to find guestbook with id: ${id}`);
      const guestbook = await this.guestbookRepository.findOne({
        where: { id },
      });
      if (!guestbook) {
        this.logger.warn(`No guestbook found with id: ${id}`);
        throw new Error(`Guestbook with id ${id} not found`);
      }
      this.logger.log(`Successfully found guestbook with id: ${id}`);
      return guestbook;
    } catch (error) {
      this.logger.error(
        `Error finding guestbook: ${error.message}`,
        error.stack
      );
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      this.logger.log(`Attempting to delete guestbook with id: ${id}`);
      const result = await this.guestbookRepository.delete(id);
      this.logger.log(`Delete result: ${JSON.stringify(result)}`);

      if (result.affected === 0) {
        this.logger.warn(`No guestbook found with id: ${id}`);
      } else {
        this.logger.log(`Successfully deleted guestbook with id: ${id}`);
      }
    } catch (error) {
      this.logger.error(
        `Error deleting guestbook: ${error.message}`,
        error.stack
      );
      throw error;
    }
  }

  async like(id: number): Promise<Guestbook> {
    const guestbook = await this.guestbookRepository.findOne({ where: { id } });
    if (guestbook) {
      guestbook.likes += 1;
      return await this.guestbookRepository.save(guestbook);
    }
    return null;
  }

  async reset(): Promise<void> {
    await this.guestbookRepository.clear();
  }
}
