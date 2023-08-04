import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CreateProductDTO, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _apiUrl = "https://young-sands-07814.herokuapp.com/api/products";

  constructor(private http: HttpClient)
  { }

  public getAllProducts()
  {
    return this.http.get<Product[]>(this._apiUrl);
  }

  public getProduct(id: string)
  {
    return this.http.get<Product>(`${this._apiUrl}/${id}`);
  }

  public createProduct(dto: CreateProductDTO)
  {
    return this.http.post<Product>(this._apiUrl, dto);
  }
}
