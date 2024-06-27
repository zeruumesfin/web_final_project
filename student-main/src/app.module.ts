import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradebookModule } from './gradebook/gradebook.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './gradebook/entities/grade.entity';
import { Classroom } from './gradebook/entities/classroom.entity';
import { Subject } from './gradebook/entities/subject.entity';
import { Student } from './registration/entities/student.entity';
import { Teacher } from './registration/entities/teacher.entity';
import { ContactModule } from './contact/contact.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { User } from './auth/entities/user.entity';
import { Contact } from './contact/entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres', 
      password: 'Zeru1234@16', 
      database: 'student',
      entities: [Student, Teacher, Subject, Classroom, Grade, User, Contact],
      synchronize: true,
    }),
    GradebookModule,
    ContactModule,
    RegistrationModule,
    AuthModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
