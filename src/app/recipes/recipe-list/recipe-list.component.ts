import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/3:2/w_3000,h_2000,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),
    new Recipe(
      'A Test Recipe2',
      'This is second recipe',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
