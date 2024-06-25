import { StudentsService } from './students.service';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(createStudentDto: CreateStudentDto): Promise<import("./schemas/student.schema").Student>;
    findAll(): Promise<import("./schemas/student.schema").Student[]>;
    findOne(id: string): Promise<import("./schemas/student.schema").Student>;
    update(id: string, updateStudentDto: CreateStudentDto): Promise<import("./schemas/student.schema").Student>;
    remove(id: string): Promise<import("./schemas/student.schema").Student>;
}
