import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2 class="counter">{{clicks}}</h2>
      <button class="counter-button" (click)="onClick()">Click</button>
    </div>
  `,
  styles: [`
    .counter-button{
    font-size: 1 rem;
    padding: 5px 10px;
    color:#585858;
    };
    .center{
    text-align: center;
    justify-content: center;
    }  
    `]
})
export class CounterComponent {
  clicks: number;

  constructor() {
    this.clicks = 42;
  }

  onClick() {
    this.clicks++;
  }
}
