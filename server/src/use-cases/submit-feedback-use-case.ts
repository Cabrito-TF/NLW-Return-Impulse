import { MailAdapter } from "../adapters/mail-asdapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
  type:string;
  comment:string;
  screenshot?:string;
}

export class SubmitFeedbackUseCase{
  constructor(
    private feedbackRepository:FeedbacksRepository,
    private MailAdapter:MailAdapter,
  ){}
  
  async execute( request:SubmitFeedbackUseCaseRequest){
    const {type, comment, screenshot } = request;
  
    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    })
    await this.MailAdapter.sendMail({
      subject:"novo Feedback",
      body:[
        `<div style="font-fanily: sans-serif; font-size: 16px; color: #1211;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join('')
    })
  }
}