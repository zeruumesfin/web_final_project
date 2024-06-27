import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradebookService } from './gradebook.service';
import { GradebookController } from './gradebook.controller';
import { Student } from './../registration/entities/student.entity';
import { Teacher } from 'src/registration/entities/teacher.entity';
import { Subject } from './entities/subject.entity';
import { Grade } from './entities/grade.entity';
import { Classroom } from './entities/classroom.entity';
import { SampleDataService } from './sample-data/sample-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Subject, Grade, Classroom, Teacher])],
  providers: [GradebookService, SampleDataService],
  controllers: [GradebookController],
})
export class GradebookModule {}
