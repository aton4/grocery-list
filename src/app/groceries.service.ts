import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {
  private groceryList: String[] = [
    'apples',
    'cookies'
  ];

  constructor() { }

  public getGroceryList(): String[] {
    return this.groceryList.slice();
  }

  public addItem(item: String) {
    this.groceryList.push(item);
    console.log(this.groceryList.slice())
  }
}
