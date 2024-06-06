import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  clearCharacter(): void {
    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }

  emitCharacter(): void {
    if (this.character.name.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit({ ...this.character, id: uuidv4() });

    this.clearCharacter();
  }
}
