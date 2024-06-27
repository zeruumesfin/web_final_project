import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Grade } from './grade.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Grade, grade => grade.subject)
  grades: Grade[];
}