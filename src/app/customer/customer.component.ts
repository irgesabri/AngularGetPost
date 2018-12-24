import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
customers:Customer[]=[]
selectedCustomer:Customer;
@Input() city:string;
  ngOnInit() {
    this.customers=[
      {id:1,firstname:"Sabri",lastname:"Irge",age:27},
      {id:2,firstname:"Cengiz",lastname:"Irge",age:28},
      {id:3,firstname:"Halime",lastname:"Irge",age:29},
    ]
  }
  selectCustomer(customer:Customer){
    this.selectedCustomer=customer
  }
}
