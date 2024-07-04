import { Component } from '@angular/core';
import { ProductsServiceService } from '../../../services/products/products-service.service';
import { Product } from '../../../models/Product';
import { DetailSaleService } from '../../../services/detail-sale/detail-sale.service';

interface Card {
  image: string;
  title: string;
  description: string;
  price: number;
  _id: string; // Asegúrate de incluir el id del producto
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  cards: Card[] = [];

  constructor(private productsService: ProductsServiceService, private saleService: DetailSaleService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducst().subscribe(
      (products: Product[]) => {
        this.cards = products.map((product) => ({
          image: 'https://cdn-icons-png.flaticon.com/256/10296/10296568.png',
          title: product.name,
          description: product.description,
          price: product.price,
          _id: String(product._id)

        }));
        // console.log(products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(card: Card): void {
    this.saleService.addToCart(card);
    console.log(`Agregado al carro: ${card.title}`);
  }
}
