import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity'
import { Repository } from 'typeorm';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async createContact(contactDto: ContactDto): Promise<Contact> {
    const newContact = new Contact()
    newContact.name = contactDto.name
    newContact.email = contactDto.email
    newContact.subject = contactDto.subject
    newContact.message = contactDto.message
    newContact.status = 'PENDING'
    return this.contactRepository.save(newContact);
  }

  async findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }
}