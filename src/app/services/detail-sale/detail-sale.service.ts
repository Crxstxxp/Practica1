import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class DetailSaleService {

  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(product: any): void {
    const cartItems = this.cartItemsSubject.getValue();
    const existingItem = cartItems.find(item => item.id === product._id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
    this.cartItemsSubject.next(cartItems);
  }

  removeFromCart(itemId: string): void {
    let cartItems = this.cartItemsSubject.getValue();
    const index = cartItems.findIndex(item => item.id === itemId);

    if (index !== -1) {
      cartItems.splice(index, 1);
      this.cartItemsSubject.next(cartItems);
    }
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  getTotal(): Observable<number> {
    return this.cartItems$.pipe(
      map(items => items.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    );
  }
}
