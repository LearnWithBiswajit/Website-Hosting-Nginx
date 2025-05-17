import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './configs/db.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({useFactory:async()=>{return dbConfig[0]}}), FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
