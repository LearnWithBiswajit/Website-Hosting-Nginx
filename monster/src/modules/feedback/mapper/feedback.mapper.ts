import { FeedbackDto } from "../dto/create-feedback.dto";
import { FeedbackEntity } from "../entities/feedback.entity";

export class FeedbackMapper{
    constructor(){}

    public static mapToEntity(feedbackDto:FeedbackDto):FeedbackEntity{
        let feedbackEntity:FeedbackEntity = new FeedbackEntity();
        feedbackEntity.feedbackId = feedbackDto.feedbackId;
        feedbackEntity.firstName = feedbackDto.firstName;
        feedbackEntity.lastName = feedbackDto.lastName;
        feedbackEntity.email = feedbackDto.email;
        feedbackEntity.subject = feedbackDto.subject;
        feedbackEntity.message = feedbackDto.message;
        return feedbackEntity;
    }
}