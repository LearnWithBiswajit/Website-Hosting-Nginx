import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './configs/db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), 
    ...dbConfig().map((config) => TypeOrmModule.forRoot(config)),
    FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
