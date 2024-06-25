// src/register/dto/create-user.dto.ts
export class CreateStudentDto {
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly dob: Date;
    readonly gender: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly role: 'student';
}

export class CreateTeacherDto {
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly dob: Date;
    readonly gender: string;
    readonly email: string;
    readonly phoneNumber: string;
    readonly role: 'teacher';
}
