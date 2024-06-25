import { RegisterService } from './register.service';
import { CreateStudentDto, CreateTeacherDto } from './dto/create-user.dto';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    createStudent(createStudentDto: CreateStudentDto): Promise<any>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<any>;
}
