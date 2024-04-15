import { Component, signal } from '@angular/core';
import { Product } from '../../../services/products';

@Component({
  selector: 'app-shopping-cart-input',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-input.component.html',
  styles: ``
})
export class ShoppingCartInputComponent {

  products = signal<Product[]>([])


}
