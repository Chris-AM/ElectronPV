import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import _ from 'lodash';
import { ENDPOINTS } from 'src/app/constants/endpoints';
import { Product } from "../../models/product";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getQuery(query: string) {
    const url = _.get(ENDPOINTS, 'SERVICES.BASE_URL') + `${query}`;
    return this.httpClient.get(url);
  }

  getProducts() {
    let products = _.get(ENDPOINTS, 'SERVICES.PRODUCTS');
    return this.getQuery(products);
  }

  getProduct(codigo_barras: string) {
    let product = _.get(ENDPOINTS, 'SERVICES.PRODUCTS') + `${codigo_barras}`;
    return this.getQuery(product);
  }

  saveProduct(product: Product) {
    let urlProduct = _.get(ENDPOINTS, 'SERVICES.BASE_URL') + _.get(ENDPOINTS, 'SERVICES.PRODUCTS') ;
    return this.httpClient.post(urlProduct, product)
  }

  updateProduct(codigo_barras: string | number, updatedProduct: Product): Observable<any> {
    let urlProduct = _.get(ENDPOINTS, 'SERVICES.BASE_URL') + _.get(ENDPOINTS, 'SERVICES.PRODUCTS') + `${codigo_barras}`;
    return this.httpClient.put(urlProduct, updatedProduct);
  }

  deleteProduct(codigo_barras: string) {
    let urlProduct = _.get(ENDPOINTS, 'SERVICES.BASE_URL') + _.get(ENDPOINTS, 'SERVICES.PRODUCTS') + `${codigo_barras}`;
    return this.httpClient.delete(urlProduct)
  }
}
