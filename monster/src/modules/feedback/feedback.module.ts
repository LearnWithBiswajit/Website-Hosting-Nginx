import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { FeedbackRepository } from './feedback.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from './entities/feedback.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FeedbackEntity])],
  controllers: [FeedbackController],
  providers: [{provide:"IFeedbackService", useClass:FeedbackService}, {provide:"IFeedbackRepository", useClass:FeedbackRepository}],
})
export class FeedbackModule {}
