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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestbookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const guestbook_entity_1 = require("./entities/guestbook.entity");
let GuestbookService = class GuestbookService {
    constructor(guestbookRepository) {
        this.guestbookRepository = guestbookRepository;
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
        return await this.guestbookRepository.findOne({
            where: { id },
        });
    }
    async like(id) {
        await this.guestbookRepository.increment({ id }, "likes", 1);
    }
    async remove(id) {
        await this.guestbookRepository.delete(id);
    }
};
GuestbookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(guestbook_entity_1.Guestbook)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GuestbookService);
exports.GuestbookService = GuestbookService;
//# sourceMappingURL=guestbook.service.js.map