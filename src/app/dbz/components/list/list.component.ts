import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: uuidv4(),
      name: 'Trunks',
      power: 10000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
