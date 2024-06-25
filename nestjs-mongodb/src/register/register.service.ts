// Example: Assuming Student and Teacher are defined in schema files directly

import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto, CreateTeacherDto } from './dto/create-user.dto'; // Adjust path as necessary

@Injectable()
export class RegisterService {
    constructor(
        @InjectModel('Student') private readonly studentModel: Model<any>, // Adjust type if Student is not defined
        @InjectModel('Teacher') private readonly teacherModel: Model<any>, // Adjust type if Teacher is not defined
    ) {}

    async createStudent(createStudentDto: CreateStudentDto): Promise<any> { // Adjust return type if Student is not defined
        try {
            const createdStudent = new this.studentModel(createStudentDto);
            return await createdStudent.save();
        } catch (error) {
            console.error('Error creating student:', error);
            throw new BadRequestException('Failed to create student.');
        }
    }

    async createTeacher(createTeacherDto: CreateTeacherDto): Promise<any> { // Adjust return type if Teacher is not defined
        try {
            const createdTeacher = new this.teacherModel(createTeacherDto);
            return await createdTeacher.save();
        } catch (error) {
            console.error('Error creating teacher:', error);
            throw new BadRequestException('Failed to create teacher.');
        }
    }
}
