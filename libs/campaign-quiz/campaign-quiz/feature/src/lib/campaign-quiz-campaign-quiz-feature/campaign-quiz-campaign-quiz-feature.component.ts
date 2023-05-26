import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { trigger, style, transition, animate } from '@angular/animations';

interface Quiz {
  question: string;
  options: string[];
  answer: string;
  userAnswer: string;
  result: string;
}

@Component({
  selector: 'mul-project-campaign-quiz-campaign-quiz-feature',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './campaign-quiz-campaign-quiz-feature.component.html',
  styleUrls: ['./campaign-quiz-campaign-quiz-feature.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CampaignQuizCampaignQuizFeatureComponent {
  quizzes: Quiz[] = [
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

  constructor(private router: Router) {}

  currentQuestionIndex = 0;
  showResults = false;

  submitAnswer() {
    const currentQuiz = this.quizzes[this.currentQuestionIndex];
    if (
      currentQuiz.userAnswer.toLowerCase() === currentQuiz.answer.toLowerCase()
    ) {
      currentQuiz.result = 'Correct';
    } else {
      currentQuiz.result = 'Incorrect';
    }
    if (this.currentQuestionIndex === this.quizzes.length - 1) {
      if (this.isAllAnswersCorrect()) {
        this.router.navigateByUrl('/on-fire');
      } else {
        this.showResults = true;
      }
    } else {
      this.currentQuestionIndex++;
    }
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    for (const quiz of this.quizzes) {
      quiz.userAnswer = '';
      quiz.result = '';
    }

    this.showResults = false;
  }

  complete() {
    this.router.navigateByUrl('/campaign-completed');
  }

  isAllAnswersCorrect(): boolean {
    return this.quizzes.every((quiz) => quiz.result === 'Correct');
  }
}
