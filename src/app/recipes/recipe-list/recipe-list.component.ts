import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Chicken in Oranges', 'Food Kitchen Meals Home Made Dishes Recipe Bio', 'http://maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
    new Recipe ('Mexican Tacos', 'Super crispy, easy to make mexican tacos', 'https://get.pxhere.com/photo/dish-meal-food-salad-cooking-produce-vegetable-kitchen-healthy-cuisine-nutrition-vegan-vegetarian-tacos-diet-organic-ingredients-recipes-remoulade-indian-cuisine-659784.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
