import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('create')
  createStudent(@Body() contactDto: ContactDto) {
    this.contactService.createContact(contactDto);
    return {
      code: 200,
      status: 'success',
      message: 'Contact us created successfully',
    };
  }

  @Get('all')
  findAll() {
    return this.contactService.findAll();
  }
}
