import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public myShoppingCart: Product[] = [];

  public total: number = 0;

  public products: Product[] = [];

  public today: Date = new Date();

  public date: Date = new Date(1997, 12, 21);

  constructor(private storeService: StoreService, private productsService: ProductsService)
  {
    this.myShoppingCart = this.storeService.ShoppingCart;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data =>
      {
        this.products = data;
      });
  }

  public AddToShoppingCart(product: Product): void
  {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
