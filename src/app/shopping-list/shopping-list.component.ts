import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(1, 'kg', 'Chicken breast'),
    new Ingredient(500, 'g', 'Oranges')
  ]
  constructor() { }

  ngOnInit() {
  }

}
