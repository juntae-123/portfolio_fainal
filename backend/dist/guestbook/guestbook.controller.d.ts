import { GuestbookService } from "./guestbook.service";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
import { Guestbook } from "./entities/guestbook.entity";
export declare class GuestbookController {
    private readonly guestbookService;
    constructor(guestbookService: GuestbookService);
    create(createGuestbookDto: CreateGuestbookDto): Promise<Guestbook>;
    findAll(): Promise<Guestbook[]>;
    findOne(id: string): Promise<Guestbook>;
    remove(id: string): Promise<void>;
    like(id: string): Promise<Guestbook>;
    reset(): Promise<void>;
}
