import { Injectable } from '@angular/core';

export interface QuizInterface {
  question: string;
  options: string[];
  answer: string;
  userAnswer: string;
  result: string;
}

@Injectable({
  providedIn: 'root',
})
export class CampaignQuizService {
  quizzes: QuizInterface[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London'],
      answer: 'Paris',
      userAnswer: '',
      result: '',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
      answer: 'Leonardo da Vinci',
      userAnswer: '',
      result: '',
    },
    // Add more quiz questions here
  ];

  getQuizzes(): QuizInterface[] {
    return this.quizzes;
  }
}
