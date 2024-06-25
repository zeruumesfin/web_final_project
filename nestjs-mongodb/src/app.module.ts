// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { RegisterModule } from 'src/register/register.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        StudentsModule,
        TeachersModule,
        RegisterModule
    ]
})
export class AppModule {}
