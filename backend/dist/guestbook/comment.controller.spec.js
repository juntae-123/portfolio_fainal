"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const comment_controller_1 = require("./comment.controller");
const comment_service_1 = require("./comment.service");
describe('CommentController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [comment_controller_1.CommentController],
            providers: [comment_service_1.CommentService],
        }).compile();
        controller = module.get(comment_controller_1.CommentController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=comment.controller.spec.js.map