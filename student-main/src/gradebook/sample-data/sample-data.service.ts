import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/registration/entities/student.entity';
import { Teacher } from 'src/registration/entities/teacher.entity';
import { Subject } from '../entities/subject.entity';
import { Classroom } from '../entities/classroom.entity';
import { Grade } from '../entities/grade.entity';

@Injectable()
export class SampleDataService implements OnModuleInit {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(Classroom)
    private classroomRepository: Repository<Classroom>,
    @InjectRepository(Grade)
    private gradeRepository: Repository<Grade>,
  ) {}

  async onModuleInit() {
    //await this.createSampleData();
  }

  async createSampleData() {
    // Create Departments
    const department1 = this.subjectRepository.create({ name: 'Amharic' });
    const department2 = this.subjectRepository.create({ name: 'English' });
    const department3 = this.subjectRepository.create({ name: 'Mathematics' });
    await this.subjectRepository.save([department1, department2, department3]);

    // Create Teachers
    const teacher1 = this.teacherRepository.create({
      firstName: 'Alice',
      middleName: 'Johnson',
      lastName: 'Hohn',
      dateOfBirth: new Date('1990-01-01'),
      gender: 'Male',
    });
    const teacher2 = this.teacherRepository.create({
      firstName: 'Bob',
      middleName: 'Rob',
      lastName: 'Low',
      dateOfBirth: new Date('1990-01-01'),
      gender: 'Female',
    });
    await this.teacherRepository.save([teacher1, teacher2]);

    // Create Courses
    const course1 = this.classroomRepository.create({ name: '11A' });
    const course2 = this.classroomRepository.create({ name: '12A' });
    await this.classroomRepository.save([course1, course2]);

    // Create Students
    const student1 = this.studentRepository.create({
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'WolDoe',
      classroom: course1,
      dateOfBirth: new Date('2000-01-01'),
      gender: 'Male',
    });
    const student2 = this.studentRepository.create({
      firstName: 'Jane',
      middleName: 'Smith',
      lastName: 'Teeth',
      classroom: course2,
      dateOfBirth: new Date('2000-01-01'),
      gender: 'Male',
    });
    await this.studentRepository.save([student1, student2]);

    // Create Grades
    const grade1 = this.gradeRepository.create({
      year: 2024,
      assignmentGrade: 85,
      midTermGrade: 90,
      finalGrade: 88,
      student: student1,
      subject: department1,
    });
    const grade2 = this.gradeRepository.create({
      year: 2024,
      assignmentGrade: 85,
      midTermGrade: 90,
      finalGrade: 88,
      student: student1,
      subject: department2,
    });

    // Create Grades
    const grade3 = this.gradeRepository.create({
      year: 2024,
      assignmentGrade: 85,
      midTermGrade: 90,
      finalGrade: 88,
      student: student2,
      subject: department1,
    });
    const grade4 = this.gradeRepository.create({
      year: 2024,
      assignmentGrade: 85,
      midTermGrade: 90,
      finalGrade: 88,
      student: student2,
      subject: department2,
    });

    await this.gradeRepository.save([grade1, grade2, grade3, grade4]);
  }
}
