import { Injectable } from "@angular/core"
import { of } from "rxjs"

export interface Product {
  name:string
  price:number
}

export interface CartItem {
  product:Product
  quentity:number
}

@Injectable({providedIn: 'root'})
export class ProductService {

  getAllProducts() {
    return of([
      {name: "Coke", price: 1000},
      {name: "Pepsi", price: 800},
      {name: "7Up", price: 700},
      {name: "Marinda", price: 650}
    ])
  }
}
