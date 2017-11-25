import { RecipeModel } from "./recipe.model"
import { EventEmitter, Injectable } from "@angular/core"
import { IngredientModel } from "../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list/shopping-list.service"

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter()
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: RecipeModel[] = [
    new RecipeModel(
      "A Noodle recipe",
      "Noodle recipe",
      "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
      [new IngredientModel("meat", 2), new IngredientModel("Noodle", 1)]
    ),
    new RecipeModel(
      "A big Burger",
      "the description of burger",
      "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg",
      [new IngredientModel("Buns", 2), new IngredientModel("meat", 2)]
    )
  ]
  getRecipes() {
    return this.recipes.slice()
  }
  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
