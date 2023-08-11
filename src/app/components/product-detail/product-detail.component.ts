import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnChanges {
  @Input() public showProductDetail = false;
  @Input() public productId = "";
  @Output() public detailClosed = new EventEmitter<boolean>();
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

  constructor(private _storeService: StoreService, private _productsService: ProductsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productId']) {
      this._productsService.getProduct(this.productId).
        subscribe(data => {
          this.selectedProduct = data;
        });
    }
  }

  public onCloseDetail(value: boolean): void {
    this.detailClosed.emit(value);
  }
}
