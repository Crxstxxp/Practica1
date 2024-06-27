import { Component } from '@angular/core';
import { ProductsServiceService } from '../../../services/products/products-service.service';
import { Product } from '../../../models/Product';

interface Card {
  image: string;
  title: string;
  description: string;
  price: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  cards: Card[] = [];

  constructor(private productsService: ProductsServiceService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducst().subscribe(
      (products: Product[]) => {
        this.cards = products.map((product) => ({
          image: 'https://cdn-icons-png.flaticon.com/256/10296/10296568.png', // Debes ajustar esto según tus datos reales de producto
          title: product.name,
          description: product.description,
          price: product.price
        }));
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(card: Card) {
    console.log(`Agregado al carro: ${card.title}`);
  }
}
