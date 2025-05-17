import { InjectRepository } from "@nestjs/typeorm";
import { FeedbackEntity } from "./entities/feedback.entity";
import { Repository } from "typeorm";
import { Logger } from "@nestjs/common";
import { IFeedbackRepository } from "./interfaces/feedbackRepo.interface";

export class FeedbackRepository implements IFeedbackRepository{

    constructor(@InjectRepository(FeedbackEntity) private readonly feedbackRepository:Repository<FeedbackEntity>){}
    logger = new Logger();

    public async insertFeedback(feedbackEntity: FeedbackEntity): Promise<FeedbackEntity> {
        try {
            this.logger.log(`Execution started for inserting data to the feedback. Data: ${feedbackEntity}`);
            let res:FeedbackEntity = await this.feedbackRepository.save(feedbackEntity);
            this.logger.log(`Execution Completed for inserting data to the feedback.`);
            return Promise.resolve(res);
        } catch (error) {
            this.logger.error("This error occurred in feedback repository. Method Name: insertFeedback", error);
            return Promise.reject(error);
        }
    }
}