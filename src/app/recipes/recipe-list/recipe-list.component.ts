import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {RecipeModel} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>()
  recipes: RecipeModel[] = [
    new RecipeModel('A test recipe', 'the description of test recipe', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new RecipeModel('A test recipe2', 'the description of test recipe', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:RecipeModel){
    this.recipeWasSelected.emit(recipe)
  }

}
