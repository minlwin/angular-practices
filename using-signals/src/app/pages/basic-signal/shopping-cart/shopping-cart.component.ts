import { Component, computed, effect, signal } from '@angular/core';
import { CartItem, Product, ProductService } from '../../../services/products';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styles: ``
})
export class ShoppingCartComponent {

  products = signal<Product[]>([])

  cartItems = signal<CartItem[]>([])

  cartCount = computed(() => this.cartItems().length > 0 ?
    this.cartItems().map(item => item.quentity)
      .reduce((a, b) => a + b) : 0)

  totalPrice = computed(() => this.cartItems().length > 0 ?
    this.cartItems().map(item => item.quentity * item.product.price)
      .reduce((a, b) => a + b) : 0)

  constructor(service:ProductService) {

    service.getAllProducts().subscribe(list => this.products.set(list))

    effect(() => {
      console.log(this.cartItems())
      console.log(this.cartCount())
    })
  }

  addToCart(product:Product) {
    this.cartItems.update(items => {
      let item = items.filter(a => a.product.name == product.name).pop()
      if(!item) {
        item = {
          product: product,
          quentity: 0
        }
        items.push(item)
      }
      item.quentity = item.quentity + 1
      const [... newArray] = items
      return newArray
    })
  }

  plusCount(index:number) {
    this.cartItems.update(items => {
      let item = items[index]
      item.quentity = item.quentity + 1
      const [... newArray] = items
      return newArray
    })
  }

  minusCount(index:number) {
    this.cartItems.update(items => {
      let item = items[index]
      item.quentity = item.quentity - 1
      const [... newArray] = items
      return newArray.filter(a => a.quentity > 0)
    })
  }
}
