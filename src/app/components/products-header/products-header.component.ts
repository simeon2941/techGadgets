import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = "desc";
  itemsCount = 10;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort:string):void{
    this.sort = newSort;
  }

  onItemsUpdated(itemsToShow:number):void{
    this.itemsCount = itemsToShow;
  }
  onLayoutUpdate(colsNumber: number): void{
    this.columnsCountChange.emit(colsNumber);
  }

}
