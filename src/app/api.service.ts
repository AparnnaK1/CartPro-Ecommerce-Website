import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getData() {
    throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) { }
  getdata()
  {
    return this.http.get("https://fakestoreapi.com/products");
  }
}
