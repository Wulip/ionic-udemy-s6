import { Component } from '@angular/core';
import { RecipesPage } from '../recipes/recipes';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
    public recipesPage = RecipesPage;
    public shoppingListPage = ShoppingListPage;
}
