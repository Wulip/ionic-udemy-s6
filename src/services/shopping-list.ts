import { Injectable } from '@angular/core'
import { Ingredient } from '../models/ingredient';

@Injectable()
export class ShoppingListService {
    private ingredients:Ingredient[] = [];

    addItem (name:string, amount:number) {
        this.ingredients.push(new Ingredient(name, amount));
    }

    addItems (items: Ingredient[]) {
        this.ingredients.push(...items);
    }

    editItem (index: number, item:Ingredient) {
        this.ingredients[index] = item;
    }

    getItems() {
        return this.ingredients.slice();
    }

    removeItem (index:number) {
        this.ingredients.splice(index, 1)
    }
}