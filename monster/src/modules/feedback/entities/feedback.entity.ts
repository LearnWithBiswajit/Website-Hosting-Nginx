import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:"UserFeedback"})
export class FeedbackEntity {
    @PrimaryColumn({name:"FeedbackID"})
    feedbackId:UUID;
    @Column({name:"FirstName", nullable:false})
    firstName:string;
    @Column({name:"LastName", nullable:true})
    lastName:string;
    @Column({name:"Email", nullable:false})
    email:string;
    @Column({name:"Message", nullable:true})
    message:string;
    @Column({name:"Subject", nullable:false})
    subject:string;
}
