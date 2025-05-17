import { FeedbackEntity } from "../entities/feedback.entity";

export interface IFeedbackRepository{
    insertFeedback(feedbackEntity:FeedbackEntity):Promise<FeedbackEntity>;
}