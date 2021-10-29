import { Component, OnInit } from '@angular/core';
import { GroceriesService } from '../groceries.service';

@Component({
  selector: 'app-groceries-input',
  templateUrl: './groceries-input.component.html',
  styleUrls: ['./groceries-input.component.css']
})
export class GroceriesInputComponent implements OnInit {
  item: String = '';
  constructor(private groceriesService: GroceriesService) { }

  ngOnInit(): void {
  }

  onItemAdd() {
    console.log(this.item);
    this.groceriesService.addItem(this.item);
  }

}
