import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  // onDelete = Index value: number
  emitDeleteCharacter(index: number): void {
    //TODO: emit the id of the character to be deleted
    this.onDelete.emit(index);
  }
}
