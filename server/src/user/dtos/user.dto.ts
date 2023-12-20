import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class User {
   @IsNotEmpty()
   @IsString()
   firstName: string;

   @IsNotEmpty()
   @IsString()
   lastName: string;

   @IsNotEmpty()
   @IsEmail()
   email: string;

   @IsNotEmpty()
   @IsString()
   country: string;

   @IsNotEmpty()
   @IsString()
   state: string;

   @IsNotEmpty()
   @IsString()
   city: string;

   @IsNotEmpty()
   @IsString()
   dob: string;

   @IsNotEmpty()
   @IsNumber()
   @Min(14)
   @Max(99)
   age: number;

   @IsNotEmpty()
   @IsString()
   gender: string;
}
