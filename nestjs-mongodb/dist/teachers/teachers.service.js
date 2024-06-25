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
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const teachers_schema_1 = require("./schemas/teachers.schema");
let TeachersService = class TeachersService {
    constructor(teacherModel) {
        this.teacherModel = teacherModel;
    }
    async create(createTeacherDto) {
        const createdTeacher = new this.teacherModel(createTeacherDto);
        return createdTeacher.save();
    }
    async findAll() {
        return this.teacherModel.find().exec();
    }
    async findOne(id) {
        return this.teacherModel.findById(id).exec();
    }
    async update(id, updateTeacherDto) {
        return this.teacherModel.findByIdAndUpdate(id, updateTeacherDto, { new: true }).exec();
    }
    async remove(id) {
        return this.teacherModel.findByIdAndDelete(id).exec();
    }
};
exports.TeachersService = TeachersService;
exports.TeachersService = TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(teachers_schema_1.Teacher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeachersService);
//# sourceMappingURL=teachers.service.js.map