import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  //prdList: IProduct[];
  // to return the list of product based on category
  prdListOfCat: IProduct[] = [];
  @Input() sentCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>; 
  orderTotalPrice: number = 0;
  
  //create object from the StaticProductsService and define it in constructor
  constructor(private staticPrdService: StaticProductsService) {
    this.totalPriceChanged = new EventEmitter<number>();
    // this.prdList = [
    //   { id: 100, name: 'Lenovo Think Pad', price: 1000434, quantity: 2, imgURL: 'https://fakeimg.pl/100/', categoryID: 1 },
    //   { id: 200, name: 'Tablet S1', price: 2034430, quantity: 3, imgURL: 'https://fakeimg.pl/100/', categoryID: 2 },
    //   { id: 800, name: 'Tablet S2', price: 2847500, quantity: 3, imgURL: 'https://fakeimg.pl/100/', categoryID: 2 },
    //   { id: 400, name: 'MacBook Pro', price: 340, quantity: 0, imgURL: 'https://fakeimg.pl/100/', categoryID: 1 },
    //   { id: 500, name: 'iPhone 13', price: 4094, quantity: 2, imgURL: 'https://fakeimg.pl/100/', categoryID: 3 },
    //   { id: 600, name: 'iPhone 12', price: 504820, quantity: 1, imgURL: 'https://fakeimg.pl/100/', categoryID: 3 },
    // ];

    // this.prdListOfCat = this.prdList
  }
  ngOnChanges(): void {
    // this.filterProductsByCatID();
    this.prdListOfCat = this.staticPrdService.getProductsByCatID(this.sentCatID);
  }

  buy(prdPrice: number, count: any) {
    this.orderTotalPrice += +count * prdPrice;
    // Execute event
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  // private filterProductsByCatID() {
  //   if (this.sentCatID == 0)
  //     this.prdListOfCat = this.prdList
  //   else
  //     this.prdListOfCat = this.prdList.filter(prd => prd.categoryID == this.sentCatID)
  // }

}
