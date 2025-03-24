import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  create(@Body() user: User): Observable<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  findOne(@Param() params: any): Observable<any> {
    return this.userService.findOne(params.id);
  }

  @Get('/all')
  findAll(): Observable<User[]> {
    return this.userService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this.userService.deletedOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
    return this.userService.findOne(Number(id));
  }
}
