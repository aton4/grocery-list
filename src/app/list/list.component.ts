import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: String[];
  constructor(private groceriesService: GroceriesService) { 
    this.list = [];
  }

  ngOnInit(): void {
    this.list = this.groceriesService.getGroceryList();

    this.groceriesService.groceriesChanged.subscribe(
      (itemList: String[]) => {
        this.list = itemList;
      }
    );
  }

}
