import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { User } from './dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
   constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

   async storeUser(body: User): Promise<{ success: boolean; message: string }> {
      const { email } = body;
      const emailIsExists = await this.userModel.findOne({ email }, { email: 1 });
      if (emailIsExists) throw new ConflictException('Email already exists');
      const createNewUser = await new this.userModel(body).save();
      if (createNewUser) {
         return {
            success: true,
            message: 'User created successfully',
         };
      }
      throw new InternalServerErrorException();
   }

   async getAllUsers(): Promise<Array<User>> {
      const findAllUsers = await this.userModel.find();
      if (findAllUsers) {
         return findAllUsers;
      }
      throw new NotFoundException('User accounts not found');
   }
}
