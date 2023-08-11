import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public myShoppingCart: Product[] = [];
  public total = 0;
  public products: Product[] = [];

  public showProductDetail = false;
  public productId = "";
  private _limit = 10;
  private _offset = 0;

  constructor(private _storeService: StoreService, private productsService: ProductsService) {
    this.myShoppingCart = this._storeService.ShoppingCart;
  }

  private loadProducts(): void
  {
    this.productsService.getProducts(this._limit, this._offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this._offset += this._limit;
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  public AddToShoppingCart(product: Product): void {
    this._storeService.addProduct(product);
    this.total = this._storeService.getTotal();
  }

  public toggleProductDetail(value: boolean): void {
    this.showProductDetail = value;
  }

  public onShowDetail(id: string): void {
    this.toggleProductDetail(true);
    this.productId = id;
  }

  public loadMore(): void {
    this.loadProducts();
  }

  public createNewProduct(): void {
    const product: CreateProductDTO =
    {
      title: "Nuevo producto",
      description: "fierro a la verga",
      images: ["unaimagen.com"],
      price: 1250,
      categoryId: 1
    }
    this.productsService.createProduct(product)
      .subscribe(data => {
        console.log("product created: ", data);
      });
  }

  public updateProduct(): void {
    const changes =
    {
      title: "Nuevo title"
    };

    const id = this.productId;

    this.productsService.updateProduct(id, changes)
      .subscribe(data => {
        console.log("updated", data);
      });
  }

}
