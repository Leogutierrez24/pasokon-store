import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _apiUrl = "https://young-sands-07814.herokuapp.com/api/products";

  constructor(private http: HttpClient)
  { }

  public getProducts(limit: number, offset: number)
  {
    let params = new HttpParams();

    if (limit != undefined && offset != undefined)
    {
      params = params.set("limit", limit);
      params = params.set("offset", offset);
    }

    return this.http.get<Product[]>(this._apiUrl, { params });
  }

  public getProduct(id: string)
  {
    return this.http.get<Product>(`${this._apiUrl}/${id}`);
  }

  public createProduct(dto: CreateProductDTO)
  {
    return this.http.post<Product>(this._apiUrl, dto);
  }

  public updateProduct(id: string, dto: UpdateProductDTO)
  {
    return this.http.put<Product>(`${this._apiUrl}/${id}`, dto);
  }

  public deleteProduct(id: string)
  {
    return this.http.delete<boolean>(`${this._apiUrl}/${id}`);
  }
}
