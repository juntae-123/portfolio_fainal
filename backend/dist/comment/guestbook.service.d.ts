import { Repository } from "typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
export declare class GuestbookService {
    private guestbookRepository;
    constructor(guestbookRepository: Repository<Guestbook>);
    create(createGuestbookDto: CreateGuestbookDto): Promise<Guestbook>;
    findAll(): Promise<Guestbook[]>;
    findOne(id: number): Promise<Guestbook | null>;
    like(id: number): Promise<void>;
    remove(id: number): Promise<void>;
}
