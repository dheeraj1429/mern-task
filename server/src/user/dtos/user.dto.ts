import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, Max, Min } from 'class-validator';

export class User {
   @IsNotEmpty()
   @IsString()
   @Matches(/^[a-zA-Z ]+$/, { message: 'First name must contain only alphabets' })
   readonly firstName: string;

   @IsNotEmpty()
   @IsString()
   @Matches(/^[a-zA-Z ]+$/, { message: 'Last name must contain only alphabets' })
   readonly lastName: string;

   @IsNotEmpty()
   @IsEmail()
   readonly email: string;

   @IsNotEmpty()
   @IsString()
   readonly country: string;

   @IsNotEmpty()
   @IsString()
   readonly state: string;

   @IsNotEmpty()
   @IsString()
   readonly city: string;

   @IsNotEmpty()
   @IsString()
   readonly dob: string;

   @IsNotEmpty()
   @IsNumber()
   @Min(14)
   @Max(99)
   readonly age: number;

   @IsNotEmpty()
   @IsString()
   readonly gender: string;
}
