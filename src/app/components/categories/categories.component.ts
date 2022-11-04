import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

categories = ['computers', 'wearable', 'sports']

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string): void{
this.showCategory.emit(category);
  }

}
