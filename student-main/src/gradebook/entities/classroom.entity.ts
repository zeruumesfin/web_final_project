import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from '../../registration/entities/student.entity';

@Entity()
export class Classroom {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Student, student => student.classroom)
    students: Student[];
}