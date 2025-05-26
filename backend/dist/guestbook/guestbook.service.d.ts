import { Repository } from "typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
export declare class GuestbookService {
    private guestbookRepository;
    private readonly logger;
    constructor(guestbookRepository: Repository<Guestbook>);
    create(createGuestbookDto: CreateGuestbookDto): Promise<Guestbook>;
    findAll(): Promise<Guestbook[]>;
    findOne(id: number): Promise<Guestbook>;
    remove(id: number): Promise<void>;
    like(id: number): Promise<Guestbook>;
    reset(): Promise<void>;
}
