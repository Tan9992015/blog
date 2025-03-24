import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: User): Observable<User> {
    return from(this.userRepository.save(user));
  }

  findAll(): Observable<User[]> {
    return from(this.userRepository.find());
  }
  findOne(id: number): Observable<any> {
    return from(this.userRepository.findOne({ where: { id } }));
  }
  deletedOne(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }
  updatedOne(id: number, user: User): Observable<any> {
    return from(this.userRepository.update(id, user));
  }
}
