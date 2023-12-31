import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit, AfterViewInit{
  catList: ICategory[];
  selectedCatID: number=0;
  recievedOrderTotalPrice: number=0;
  @ViewChild('clientNameInp') clientNameInpElem!: ElementRef; //Non-null assertion operator
  @ViewChild(ProductListComponent) prdListCompObj!: ProductListComponent; 

  constructor(){
    this.catList = [
      {id: 1, name: 'Laptops'},
      {id: 2, name: 'Tablets'},
      {id: 3, name: 'Mobiles'},
      
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = "Your Name Here";
    this.clientNameInpElem.nativeElement.style.border = "2px solid red";
    //console.log(this.prdListCompObj.prdList);
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice: number){
    this.recievedOrderTotalPrice = totalPrice;  
  }

  completeOrder(){
    //this.prdListCompObj.prdList[0].quantity -= 1
  }
  
}
