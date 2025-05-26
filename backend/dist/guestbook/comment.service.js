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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const guestbook_entity_1 = require("./entities/guestbook.entity");
let CommentService = class CommentService {
    constructor(commentRepository, guestbookRepository) {
        this.commentRepository = commentRepository;
        this.guestbookRepository = guestbookRepository;
    }
    async create(createCommentDto) {
        const guestbook = await this.guestbookRepository.findOne({
            where: { id: createCommentDto.guestbookId },
        });
        if (!guestbook) {
            throw new Error("Guestbook not found");
        }
        const comment = this.commentRepository.create(Object.assign(Object.assign({}, createCommentDto), { guestbook }));
        return await this.commentRepository.save(comment);
    }
    async findAll(guestbookId) {
        if (guestbookId) {
            return await this.commentRepository.find({
                where: { guestbook: { id: guestbookId } },
                relations: ["guestbook"],
                order: { createdAt: "DESC" },
            });
        }
        return await this.commentRepository.find({
            relations: ["guestbook"],
            order: { createdAt: "DESC" },
        });
    }
    async findOne(id) {
        return await this.commentRepository.findOne({
            where: { id },
            relations: ["guestbook"],
        });
    }
    async update(id, updateCommentDto) {
        await this.commentRepository.update(id, updateCommentDto);
        return await this.findOne(id);
    }
    async remove(id) {
        return await this.commentRepository.delete(id);
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(1, (0, typeorm_1.InjectRepository)(guestbook_entity_1.Guestbook)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map