import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentsService {
    private studentModel;
    constructor(studentModel: Model<Student>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: string): Promise<Student>;
    update(id: string, updateStudentDto: CreateStudentDto): Promise<Student>;
    remove(id: string): Promise<Student>;
}
