import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addNewIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  handlerAddIngredient() {
    const ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.addNewIngredient.emit(ingredient);
  }
}
