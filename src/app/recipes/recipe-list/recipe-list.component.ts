import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg'),
    new Recipe('Test Recipe2', 'Test Description2', 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
