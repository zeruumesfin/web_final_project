import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './../registration/entities/student.entity';
import { Grade } from './entities/grade.entity';
import { Classroom } from './entities/classroom.entity';
import { Subject } from './entities/subject.entity';
import { CreateGradeDto } from './dto/create-grade.dto';

@Injectable()
export class GradebookService {
  constructor(
    @InjectRepository(Student) private studentsRepository: Repository<Student>,
    @InjectRepository(Grade) private gradesRepository: Repository<Grade>,
    @InjectRepository(Classroom)
    private classroomRepository: Repository<Classroom>,
    @InjectRepository(Subject) private subjectRepository: Repository<Subject>,
  ) {}

  async createGrade(createGradeDto: CreateGradeDto): Promise<Grade> {
    const student = await this.studentsRepository.findOne({
      where: { id: createGradeDto.studentId },
    });

    const subject = await this.subjectRepository.findOne({
      where: { id: createGradeDto.subjectId },
    });

    const grade = new Grade();
    grade.student = student;
    grade.subject = subject;
    grade.assignmentGrade = createGradeDto.assignment;
    grade.midTermGrade = createGradeDto.midTerm;
    grade.finalGrade = createGradeDto.finalExam;
    grade.year = createGradeDto.year;

    return this.gradesRepository.save(grade);
  }

  async getGradesBySubject(subjectId: number): Promise<Grade[]> {
    return this.gradesRepository.find({
      where: { subject: { id: subjectId } },
      relations: ['student', 'subject'],
    });
  }

  async findGradesByStudentId(year: number, studentId: number): Promise<any> {
    return this.gradesRepository
      .createQueryBuilder('grade')
      .innerJoinAndSelect('grade.student', 'student')
      .innerJoinAndSelect('student.classroom', 'classroom')
      .innerJoinAndSelect('grade.subject', 'subject')
      .where('student.id = :studentId', { studentId })
      .andWhere('grade.year = :year', { year })
      .select([
        'student.firstName',
        'student.middleName',
        'student.lastName',
        'classroom.name',
        'subject.name',
        'grade.assignmentGrade',
        'grade.midTermGrade',
        'grade.finalGrade',
        'grade.totalGrade',
      ])
      .getMany();
  }

  async findStudentsAndGrades(
    year: number,
    classroomId: number,
    subjectId: number,
  ): Promise<any> {
    return this.gradesRepository
      .createQueryBuilder('grade')
      .innerJoinAndSelect('grade.student', 'student')
      .innerJoinAndSelect('student.classroom', 'classroom')
      .innerJoinAndSelect('grade.subject', 'subject')
      .andWhere('student.classroomId = :classroomId', { classroomId })
      .andWhere('grade.subjectId = :subjectId', { subjectId })
      .andWhere('grade.year = :year', { year })
      .select([
        'student.firstName',
        'student.middleName',
        'student.lastName',
        'classroom.name',
        'subject.name',
        'grade.assignmentGrade',
        'grade.midTermGrade',
        'grade.finalGrade',
        'grade.totalGrade',
      ])
      .getMany();
  }

  async findDistinctClassrooms(): Promise<{ id: number; name: string }[]> {
    return this.classroomRepository
      .createQueryBuilder('classroom')
      .select(['classroom.name', 'classroom.id'])
      .distinctOn(['classroom.name'])
      .orderBy('classroom.name', 'ASC')
      .getRawMany();
  }

  async findDistinctSubjects(): Promise<{ id: number; name: string }[]> {
    return this.subjectRepository
      .createQueryBuilder('subject')
      .select(['subject.name', 'subject.id'])
      .distinctOn(['subject.name'])
      .orderBy('subject.name', 'ASC')
      .getRawMany();
  }
  async findStudentsByClassroom(classroomId: number): Promise<Student[]> {
    return this.studentsRepository.find({
      where: { classroom: { id: classroomId } },
    });
  }
}
