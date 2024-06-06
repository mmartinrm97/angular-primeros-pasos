import { Injectable } from '@angular/core';
import { Character } from '../interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuidv4(),
      name: 'Gohan',
      power: 8000,
    },
    {
      id: uuidv4(),
      name: 'Piccolo',
      power: 8000,
    },
    {
      id: uuidv4(),
      name: 'Trunks',
      power: 10000,
    },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
