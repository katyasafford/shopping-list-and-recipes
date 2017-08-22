import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeSerive: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //fetch id from the route
    this.route.params.subscribe(
      (params: Params) => {
        // + is to convert string to number ( of the id retrieved from url)
        this.id = +params['id'];
        this.recipe = this.recipeSerive.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeSerive.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeSerive.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
