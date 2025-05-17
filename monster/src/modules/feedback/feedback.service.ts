import { Inject, Injectable, Logger } from '@nestjs/common';
import { FeedbackDto } from './dto/create-feedback.dto';
import { IFeedbackService } from './interfaces/feedbackService.interface';
import { IFeedbackRepository } from './interfaces/feedbackRepo.interface';
import { FeedbackMapper } from './mapper/feedback.mapper';

@Injectable()
export class FeedbackService implements IFeedbackService {
  constructor(@Inject("IFeedbackRepository") private readonly feedbackRepository:IFeedbackRepository){}
  logger = new Logger();

  public async createFeedback(feedbackDto: FeedbackDto): Promise<FeedbackDto> {
    try {
      let feedbackEntity = FeedbackMapper.mapToEntity(feedbackDto);
      let res = await this.feedbackRepository.insertFeedback(feedbackEntity);
      return Promise.resolve(res);
    } catch (error) {
      this.logger.error("This error occurred in feedback service. Method Name: createFeedback", error);
      return Promise.reject(error);
    }
  }

  

}
