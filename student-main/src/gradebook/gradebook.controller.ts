import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GradebookService } from './gradebook.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { Grade } from './entities/grade.entity';

@Controller('gradebook')
export class GradebookController {
  constructor(private readonly gradebookService: GradebookService) {}

  @Post('grade')
  create(@Body() createGradeDto: CreateGradeDto): Promise<Grade> {
    return this.gradebookService.createGrade(createGradeDto);
  }

  @Get('subject/:subjectId')
  getGradesBySubject(@Param('subjectId') subjectId: number): Promise<Grade[]> {
    return this.gradebookService.getGradesBySubject(subjectId);
  }

  @Get('grades/:studentId/:year')
  async getGrades(
    @Param('studentId') studentId: number,
    @Param('year') year: number,
  ) {
    return this.gradebookService.findGradesByStudentId(year, studentId);
  }

  @Get('grades/:year/:classroomId/:subjectId')
  async getStudentsAndGrades(
    @Param('year') year: number,
    @Param('classroomId') classroomId: number,
    @Param('subjectId') subjectId: number,
  ) {
    return this.gradebookService.findStudentsAndGrades(
      year,
      classroomId,
      subjectId,
    );
  }

  @Get('classrooms')
  findDistinctClassrooms() {
    return this.gradebookService.findDistinctClassrooms();
  }

  @Get('subjects')
  findDistinctSubjects() {
    return this.gradebookService.findDistinctSubjects();
  }

  @Get('student/:classroomId')
  async getStudentsByClassroom(
    @Param('classroomId') classroomId: number
  ) {
    return this.gradebookService.findStudentsByClassroom(
      classroomId      
    );
  }
}

