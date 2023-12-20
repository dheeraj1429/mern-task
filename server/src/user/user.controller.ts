import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './dtos/user.dto';

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Post('storeUser')
   @HttpCode(HttpStatus.CREATED)
   async storeUser(@Body() body: User): Promise<{ success: boolean; message: string }> {
      return this.userService.storeUser(body);
   }

   @Get('get-all-users')
   @HttpCode(HttpStatus.OK)
   async getAllUsers(): Promise<Array<User>> {
      return this.userService.getAllUsers();
   }
}
