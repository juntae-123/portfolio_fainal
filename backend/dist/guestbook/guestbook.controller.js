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
exports.GuestbookController = void 0;
const common_1 = require("@nestjs/common");
const guestbook_service_1 = require("./guestbook.service");
const create_guestbook_dto_1 = require("./dto/create-guestbook.dto");
let GuestbookController = class GuestbookController {
    constructor(guestbookService) {
        this.guestbookService = guestbookService;
    }
    create(createGuestbookDto) {
        return this.guestbookService.create(createGuestbookDto);
    }
    findAll() {
        return this.guestbookService.findAll();
    }
    async findOne(id) {
        try {
            const parsedId = parseInt(id, 10);
            if (isNaN(parsedId)) {
                throw new common_1.HttpException("유효하지 않은 방명록 ID입니다.", common_1.HttpStatus.BAD_REQUEST);
            }
            const guestbook = await this.guestbookService.findOne(parsedId);
            if (!guestbook) {
                throw new common_1.HttpException(`ID가 ${id}인 방명록을 찾을 수 없습니다.`, common_1.HttpStatus.NOT_FOUND);
            }
            return guestbook;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException("서버 오류가 발생했습니다.", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        return this.guestbookService.remove(+id);
    }
    like(id) {
        return this.guestbookService.like(+id);
    }
    reset() {
        return this.guestbookService.reset();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guestbook_dto_1.CreateGuestbookDto]),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(":id/like"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "like", null);
__decorate([
    (0, common_1.Delete)("reset"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "reset", null);
GuestbookController = __decorate([
    (0, common_1.Controller)("guestbook"),
    __metadata("design:paramtypes", [guestbook_service_1.GuestbookService])
], GuestbookController);
exports.GuestbookController = GuestbookController;
//# sourceMappingURL=guestbook.controller.js.map