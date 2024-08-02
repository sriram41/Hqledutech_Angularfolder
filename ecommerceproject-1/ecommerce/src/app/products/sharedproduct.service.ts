import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedproductService {

  constructor(public http:HttpClient) { }

  getAllCategories() {
    const url = "http://localhost:3000/categories"
    return this.http.get(url)
  }

  getAllProducts() {
    const url = "http://localhost:3000/products"
    return this.http.get(url)
  }

  getAllproductsByCategory(cid:any) {
    const url = "http://localhost:3000/products?catid="+ cid;
    return this.http.get(url)
  }

  getViewproduct(pid:any) {
    const url ="http://localhost:3000/products/"+pid;
    return this.http.get(url)
  }

  deleteproduct(pid:any) {
    const url ="http://localhost:3000/products/"+pid;
    return this.http.delete(url)
  }

}
