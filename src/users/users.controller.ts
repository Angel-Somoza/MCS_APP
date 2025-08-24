import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';


@Controller('users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  @HttpCode(200)
  create(@Body() body: any): Promise<User> {
    return this.usersService.create(body);
  }

  @Get()
  findAll(): Promise<User[]> {

    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {

    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): Promise<User | null> {

    return this.usersService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User | null> {

    return this.usersService.remove(id);
  }
}