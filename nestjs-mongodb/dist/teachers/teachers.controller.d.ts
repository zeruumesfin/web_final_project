import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from 'src/teachers/dto/create-teacher.dto';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherDto: CreateTeacherDto): Promise<import("./schemas/teachers.schema").Teacher>;
    findAll(): Promise<import("./schemas/teachers.schema").Teacher[]>;
    findOne(id: string): Promise<import("./schemas/teachers.schema").Teacher>;
    update(id: string, updateTeacherDto: CreateTeacherDto): Promise<import("./schemas/teachers.schema").Teacher>;
    remove(id: string): Promise<import("./schemas/teachers.schema").Teacher>;
}
