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
    findOne(id) {
        return this.guestbookService.findOne(+id);
    }
    remove(id) {
        return this.guestbookService.remove(+id);
    }
    like(id) {
        return this.guestbookService.like(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guestbook_dto_1.CreateGuestbookDto]),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(":id/like"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuestbookController.prototype, "like", null);
GuestbookController = __decorate([
    (0, common_1.Controller)("guestbook"),
    __metadata("design:paramtypes", [guestbook_service_1.GuestbookService])
], GuestbookController);
exports.GuestbookController = GuestbookController;
//# sourceMappingURL=guestbook.controller.js.map