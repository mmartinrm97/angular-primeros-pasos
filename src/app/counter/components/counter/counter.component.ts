import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetToDefaultValue()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`,
})
export class CounterComponent implements OnInit {
  constructor() {}
  DEFAULT_VALUE = 0;
  public counter: number = this.DEFAULT_VALUE;

  ngOnInit() {}

  resetToDefaultValue() {
    if (this.counter === 0) return;
    this.counter = this.DEFAULT_VALUE;
  }

  increaseBy(value: number) {
    this.counter += value;
  }
}
