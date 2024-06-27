import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, AfterLoad } from 'typeorm';
import { Student } from '../../registration/entities/student.entity';
import { Subject } from './subject.entity';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column({ nullable: true })
  assignmentGrade: number;

  @Column({ nullable: true })
  midTermGrade: number;

  @Column({ nullable: true })
  finalGrade: number;

  @Column({ nullable: true })
  totalGrade: number;

  @ManyToOne(() => Student, student => student.grades)
  student: Student;

  @ManyToOne(() => Subject, subject => subject.grades)
  subject: Subject;

  calculateTotalGrade(): number {
    return this.assignmentGrade * 0.2 + this.midTermGrade * 0.3 + this.finalGrade * 0.5;
  }

  @AfterLoad()
  assignLetterGrade() {
    const totalGrade = this.calculateTotalGrade();
    this.totalGrade = totalGrade;
  }
}
