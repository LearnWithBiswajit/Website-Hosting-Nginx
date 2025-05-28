import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class FeedbackDto {

    @IsUUID()
    @IsOptional()
    feedbackId: UUID
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastName: string;
    @IsString()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    subject: string;
    @IsString()
    message: string;
}
