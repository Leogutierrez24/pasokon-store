import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: Product =
  {
    id: "",
    price: 0,
    images: [],
    title: "",
    description: "",
    category: {
      id: 0,
      name: "",
      typeImg: ""
    }
  }

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  public addToCart(): void
  {
    this.addedProduct.emit(this.product);
  }

  public showDetail(): void
  {
    this.showProduct.emit(this.product.id);
  }
}
