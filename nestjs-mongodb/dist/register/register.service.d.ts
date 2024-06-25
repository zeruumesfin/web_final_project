import { Model } from 'mongoose';
import { CreateStudentDto, CreateTeacherDto } from './dto/create-user.dto';
export declare class RegisterService {
    private readonly studentModel;
    private readonly teacherModel;
    constructor(studentModel: Model<any>, teacherModel: Model<any>);
    createStudent(createStudentDto: CreateStudentDto): Promise<any>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<any>;
}
