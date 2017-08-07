import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hot Dog',
      'This is a sad hot dog recipe',
      'http://masarica.cl/images/hotdog2.jpg',
      [
        new Ingredient('Sausage', 1),
        new Ingredient('Hotdog bun', 1)
      ]
    ),
    new Recipe(
      'Burger',
      'This is a sad burger recipe',
      'http://aht.seriouseats.com/images/20110228-in-n-out-secret-menu%20-%2004.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    //calling slice() with no arguments helps to return a cipy or recipes
    //so recipes cant be access and modified from outside, all modifications will happen to its returned with a slice() copy
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
