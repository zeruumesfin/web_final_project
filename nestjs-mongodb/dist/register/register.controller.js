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
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const create_user_dto_1 = require("./dto/create-user.dto");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    async createStudent(createStudentDto) {
        return this.registerService.createStudent(createStudentDto);
    }
    async createTeacher(createTeacherDto) {
        return this.registerService.createTeacher(createTeacherDto);
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Post)('student'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Post)('teacher'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "createTeacher", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
//# sourceMappingURL=register.controller.js.map