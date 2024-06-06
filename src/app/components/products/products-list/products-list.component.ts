import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../models/Product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductsServiceService } from '../../../services/products/products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  productList!: MatTableDataSource<Product>;

  columnsHeader = ['date', 'name', 'price', 'amount', 'status', 'opciones'];

  constructor(
    private productService: ProductsServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod(): void {
    try {
      this.productService.getProducst().subscribe((items: Product[]) => {
        this.productList = new MatTableDataSource(items);
        console.log(items);
      });
    } catch (error) {
      console.log(error);
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.productList.filter = filterValue.trim().toLowerCase();
  }

}
