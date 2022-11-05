import { Product } from './../../models/product.model';
import { Cart } from './../../models/cart.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]:number} = {1:400, 3:335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols =3;
  category:string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onLayoutUpdate(colsNumber: number):void{
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(selectedCategory: string):void{
    this.category = selectedCategory;
  }
  onAddToCard(product:Product):void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity:1,
      id:product.id
    })

  }
}
