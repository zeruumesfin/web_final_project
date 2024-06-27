import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Classroom } from './../gradebook/entities/classroom.entity';
import { RegistrationDto } from './dto/registration.dto';
import { Teacher } from './entities/teacher.entity';
import { EmailService } from 'src/email/email.service';
import { User } from 'src/auth/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Classroom)
    private classroomRepository: Repository<Classroom>,
  ) {}

  async createStudent(createStudentDto: RegistrationDto): Promise<Student> {
    const student = new Student();
    student.firstName = createStudentDto.firstName;
    student.middleName = createStudentDto.middleName;
    student.lastName = createStudentDto.lastName;
    student.dateOfBirth = createStudentDto.dateOfBirth;
    student.gender = createStudentDto.gender;
    student.email = createStudentDto.email;
    student.phoneNumber = createStudentDto.phoneNumber;

    try {
      await this.registerUser(student.firstName, student.email, 'STUDENT');
    } catch (error) {
      console.error('Error registering user:', error);
    }
    
    return this.studentRepository.save(student);
  }

  async createTeacher(createTeacherDto: RegistrationDto): Promise<Teacher> {
    const teacher = new Teacher();
    teacher.firstName = createTeacherDto.firstName;
    teacher.middleName = createTeacherDto.middleName;
    teacher.lastName = createTeacherDto.lastName;
    teacher.dateOfBirth = createTeacherDto.dateOfBirth;
    teacher.gender = createTeacherDto.gender;
    teacher.email = createTeacherDto.email;
    teacher.phoneNumber = createTeacherDto.phoneNumber;

    this.registerUser(teacher.firstName, teacher.email, 'TEACHER');

    return this.teacherRepository.save(teacher);
  }

  async registerUser(name: string, email: string, role: string) {
    console.log('Inside Register ', name);

    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User();
    user.username = email;
    user.password = hashedPassword;
    user.role = role;

    this.userRepository.save(user);

    const emailService = new EmailService();
    emailService.sendMail(
      email,
      'Welcome to ' + name,
      'Your login credential is have been successfully registered \n username: ' +
        email +
        '\n password: ' +
        password,
    );
  }

  async sendEmail(name: string, email: string, password: string) {
    const emailService = new EmailService();
    emailService.sendMail(
      email,
      'Welcome to ' + name,
      'Your login credential is have been successfully registered \n username: ' +
        email +
        '\n password: ' +
        password,
    );
    return `Email sent to ${email}`;
  }

  async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async generatePassword(length): Promise<string> {
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
}
