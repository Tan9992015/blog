import { Module,forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { AuthModule } from "src/auth/auth.module";
import { BlogModule } from "src/blog/blog.module";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity]),forwardRef(()=>AuthModule),forwardRef(()=>BlogModule)],
    controllers:[UserController],
    providers:[UserService],
    exports:[UserService]
})
export class UserModule {
    
}