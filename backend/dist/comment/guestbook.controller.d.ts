import { GuestbookService } from "./guestbook.service";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
export declare class GuestbookController {
    private readonly guestbookService;
    constructor(guestbookService: GuestbookService);
    create(createGuestbookDto: CreateGuestbookDto): Promise<import("./entities/guestbook.entity").Guestbook>;
    findAll(): Promise<import("./entities/guestbook.entity").Guestbook[]>;
    findOne(id: string): Promise<import("./entities/guestbook.entity").Guestbook>;
    remove(id: string): Promise<void>;
    like(id: string): Promise<void>;
}
