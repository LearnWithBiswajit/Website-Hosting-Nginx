import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Logger } from '@nestjs/common';
import { FeedbackDto } from './dto/create-feedback.dto';
import { IFeedbackService } from './interfaces/feedbackService.interface';

@Controller('feedback')
export class FeedbackController {
  constructor(@Inject('IFeedbackService') private readonly feedbackService: IFeedbackService) {}
  logger = new Logger();
  @Post()
  public async createFeedback(@Body() createFeedbackDto: FeedbackDto) {
    try {
      return this.feedbackService.createFeedback(createFeedbackDto);
    } catch (error) {
      this.logger.error("This error occurred in feedback service. Method Name: createFeedback", error);
      return Promise.reject(error);
    }
  }

}
