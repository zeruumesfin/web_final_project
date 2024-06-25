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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RegisterService = class RegisterService {
    constructor(studentModel, teacherModel) {
        this.studentModel = studentModel;
        this.teacherModel = teacherModel;
    }
    async createStudent(createStudentDto) {
        try {
            const createdStudent = new this.studentModel(createStudentDto);
            return await createdStudent.save();
        }
        catch (error) {
            console.error('Error creating student:', error);
            throw new common_1.BadRequestException('Failed to create student.');
        }
    }
    async createTeacher(createTeacherDto) {
        try {
            const createdTeacher = new this.teacherModel(createTeacherDto);
            return await createdTeacher.save();
        }
        catch (error) {
            console.error('Error creating teacher:', error);
            throw new common_1.BadRequestException('Failed to create teacher.');
        }
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Student')),
    __param(1, (0, mongoose_1.InjectModel)('Teacher')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], RegisterService);
//# sourceMappingURL=register.service.js.map