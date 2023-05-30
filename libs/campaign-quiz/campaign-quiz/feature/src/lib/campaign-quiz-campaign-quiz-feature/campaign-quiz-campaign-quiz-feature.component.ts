/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { trigger, style, transition, animate } from '@angular/animations';

import { QuizInterface } from 'libs/campaign-quiz/service/src/lib/campaign-quiz-service/campaign-quiz-service.service';
import { CampaignQuizService } from 'libs/campaign-quiz/service/src/lib/campaign-quiz-service/campaign-quiz-service.service';
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
  quizzes: QuizInterface[];

  constructor(
    private router: Router,
    private campaignQuizService: CampaignQuizService
  ) {
    this.quizzes = this.campaignQuizService.getQuizzes();
  }

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
