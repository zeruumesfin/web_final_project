import { Classroom } from 'src/gradebook/entities/classroom.entity';
import { Grade } from 'src/gradebook/entities/grade.entity';
import {
  ManyToOne,
  OneToMany,
  Entity,
  PrimaryGeneratedColumn,
  Column,Unique
} from 'typeorm';
@Entity()
@Unique(['email'])
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @ManyToOne(() => Classroom, (classroom) => classroom.students)
  classroom: Classroom;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];
}
