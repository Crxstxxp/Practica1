import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DetailSaleService,
  CartItem,
} from '../../services/detail-sale/detail-sale.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems$?: Observable<CartItem[]>;
  total$?: Observable<number>;

  constructor(private saleService: DetailSaleService) {}

  ngOnInit(): void {
    this.cartItems$ = this.saleService.getCartItems();
    this.total$ = this.saleService.getTotal();
  }

  removeFromCart(itemId: string): void {
    this.saleService.removeFromCart(itemId);
  }
}
