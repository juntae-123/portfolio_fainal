"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestbookModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const guestbook_entity_1 = require("./entities/guestbook.entity");
const comment_entity_1 = require("./entities/comment.entity");
const guestbook_service_1 = require("./guestbook.service");
const guestbook_controller_1 = require("./guestbook.controller");
const comment_service_1 = require("./comment.service");
const comment_controller_1 = require("./comment.controller");
let GuestbookModule = class GuestbookModule {
};
GuestbookModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([guestbook_entity_1.Guestbook, comment_entity_1.Comment])],
        controllers: [guestbook_controller_1.GuestbookController, comment_controller_1.CommentController],
        providers: [guestbook_service_1.GuestbookService, comment_service_1.CommentService],
        exports: [typeorm_1.TypeOrmModule],
    })
], GuestbookModule);
exports.GuestbookModule = GuestbookModule;
//# sourceMappingURL=guestbook.module.js.map