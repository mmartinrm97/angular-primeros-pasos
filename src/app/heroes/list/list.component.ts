import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Superman',
    'Batman',
    'Aquaman',
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Black Panther',
  ];

  public deletedHero?: string = '';

  removeLastHero(): void {
    if (this.heroNames.length === 0) return;

    const deletedHero = this.heroNames.pop();
    this.deletedHero = deletedHero;
  }
}
