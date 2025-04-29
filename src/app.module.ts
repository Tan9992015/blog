import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Tan9992015',
    database:'demo',
    autoLoadEntities: true,
    synchronize:true,
  }),
  UserModule,
  BlogModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
