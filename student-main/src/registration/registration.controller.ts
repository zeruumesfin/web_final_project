import { Controller, Post, Body } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDto } from './dto/registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(
    private registrationService: RegistrationService,
  ) {}

  @Post('student')
  createStudent(@Body() createStudentDto: RegistrationDto) {
    return this.registrationService.createStudent(createStudentDto);
  }

  @Post('teacher')
  createTeacher(@Body() createTeacherDto: RegistrationDto) {
    return this.registrationService.createTeacher(createTeacherDto);
  }
}