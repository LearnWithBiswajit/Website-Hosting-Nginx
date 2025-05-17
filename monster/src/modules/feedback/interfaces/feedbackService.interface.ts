import { FeedbackDto } from "../dto/create-feedback.dto";

export interface IFeedbackService{
    createFeedback(feedbackDto:FeedbackDto):Promise<FeedbackDto>;
}