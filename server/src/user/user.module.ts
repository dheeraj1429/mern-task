import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './dtos/user.dto';
import { UserSchema } from './schemas/user.schema';

@Module({
   imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
   providers: [UserService],
   controllers: [UserController],
})
export class UserModule {}