import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.development'] }),
      MongooseModule.forRoot(process.env.MONGODB_URI),
      UserModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
