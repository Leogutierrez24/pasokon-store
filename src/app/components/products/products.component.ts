import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: Product[] =
  [
    {
      id: "1",
      name: "Product 1",
      image: "../../../assets/images/asus-gtx1660s.jpg",
      price: 100
    },
    {
      id: "2",
      name: "Product 2",
      image: "../../../assets/images/asus-gtx1660s.jpg",
      price: 100
    },
    {
      id: "3",
      name: "Product 3",
      image: "../../../assets/images/asus-gtx1660s.jpg",
      price: 100
    },
    {
      id: "5",
      name: "Product 5",
      image: "../../../assets/images/asus-gtx1660s.jpg",
      price: 100
    },
  ];
}
