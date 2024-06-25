// src/register/register.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateStudentDto, CreateTeacherDto } from './dto/create-user.dto';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) {}

    @Post('student')
    async createStudent(@Body() createStudentDto: CreateStudentDto): Promise<any> {
        return this.registerService.createStudent(createStudentDto);
    }

    @Post('teacher')
    async createTeacher(@Body() createTeacherDto: CreateTeacherDto): Promise<any> {
        return this.registerService.createTeacher(createTeacherDto);
    }
}
