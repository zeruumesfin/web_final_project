import { Model } from 'mongoose';
import { Teacher } from './schemas/teachers.schema';
import { CreateTeacherDto } from './dto/create-teacher.dto';
export declare class TeachersService {
    private teacherModel;
    constructor(teacherModel: Model<Teacher>);
    create(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    findOne(id: string): Promise<Teacher>;
    update(id: string, updateTeacherDto: CreateTeacherDto): Promise<Teacher>;
    remove(id: string): Promise<Teacher>;
}
