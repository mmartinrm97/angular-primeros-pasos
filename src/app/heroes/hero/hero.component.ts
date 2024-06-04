import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHeroName(): void {
    this.name = 'Spiderman';
  }

  changeHeroAge(): void {
    this.age = 20;
  }

  resetHero(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}
