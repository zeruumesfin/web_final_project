import { Document } from 'mongoose';
export declare class Teacher extends Document {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    gender: string;
    email: string;
    phone: string;
}
export declare const TeacherSchema: import("mongoose").Schema<Teacher, import("mongoose").Model<Teacher, any, any, any, Document<unknown, any, Teacher> & Teacher & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Teacher, Document<unknown, {}, import("mongoose").FlatRecord<Teacher>> & import("mongoose").FlatRecord<Teacher> & Required<{
    _id: unknown;
}>>;
