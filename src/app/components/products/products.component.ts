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
  public selectedProduct: Product =
  {
    id: "",
    title: "",
    price: 0,
    description: "",
    category: {
      id: 0,
      name: "",
      typeImg: ""
    },
    images: []
  }

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

  public toggleProductDetail(): void
  {
    this.showProductDetail = !this.showProductDetail;
  }

  public onShowDetail(id: string): void
  {
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetail();
      this.selectedProduct = data;
    });
  }

  public createNewProduct()
  {
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

}
