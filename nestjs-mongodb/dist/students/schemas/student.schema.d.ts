import { Document } from 'mongoose';
export declare class Student extends Document {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    gender: string;
    email: string;
    phone: string;
}
export declare const StudentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, Document<unknown, any, Student> & Student & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & Required<{
    _id: unknown;
}>>;
