"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GuestbookService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestbookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const guestbook_entity_1 = require("./entities/guestbook.entity");
let GuestbookService = GuestbookService_1 = class GuestbookService {
    constructor(guestbookRepository) {
        this.guestbookRepository = guestbookRepository;
        this.logger = new common_1.Logger(GuestbookService_1.name);
    }
    async create(createGuestbookDto) {
        const guestbook = this.guestbookRepository.create(createGuestbookDto);
        return await this.guestbookRepository.save(guestbook);
    }
    async findAll() {
        return await this.guestbookRepository.find({
            order: { createdAt: "DESC" },
        });
    }
    async findOne(id) {
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
        }
        catch (error) {
            this.logger.error(`Error finding guestbook: ${error.message}`, error.stack);
            throw error;
        }
    }
    async remove(id) {
        try {
            this.logger.log(`Attempting to delete guestbook with id: ${id}`);
            const result = await this.guestbookRepository.delete(id);
            this.logger.log(`Delete result: ${JSON.stringify(result)}`);
            if (result.affected === 0) {
                this.logger.warn(`No guestbook found with id: ${id}`);
            }
            else {
                this.logger.log(`Successfully deleted guestbook with id: ${id}`);
            }
        }
        catch (error) {
            this.logger.error(`Error deleting guestbook: ${error.message}`, error.stack);
            throw error;
        }
    }
    async like(id) {
        const guestbook = await this.guestbookRepository.findOne({ where: { id } });
        if (guestbook) {
            guestbook.likes += 1;
            return await this.guestbookRepository.save(guestbook);
        }
        return null;
    }
    async reset() {
        await this.guestbookRepository.clear();
    }
};
GuestbookService = GuestbookService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(guestbook_entity_1.Guestbook)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GuestbookService);
exports.GuestbookService = GuestbookService;
//# sourceMappingURL=guestbook.service.js.map