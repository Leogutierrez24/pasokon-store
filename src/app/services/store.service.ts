import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private myShoppingCart: Product[] = [];

  private cart = new BehaviorSubject<Product[]>([]);

  public cart$ = this.cart.asObservable();

  get ShoppingCart() { return this.myShoppingCart; }

  public addProduct(product: Product)
  {
    this.myShoppingCart.push(product);
    this.cart.next(this.myShoppingCart);
  }

  public getTotal(): number
  {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
