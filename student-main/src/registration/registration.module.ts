import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { Subject } from './../gradebook/entities/subject.entity';
import { Grade } from './../gradebook/entities/grade.entity';
import { Classroom } from './../gradebook/entities/classroom.entity';
import { User } from './../auth/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Subject, Grade, Classroom, Teacher, User])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
