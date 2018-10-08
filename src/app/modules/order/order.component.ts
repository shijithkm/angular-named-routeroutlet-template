import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders = [
    'Order 1',
    'Order 2',
    'Order 3',
    'Order 4',
    'Order 5',
    'Order 6',
    'Order 7',
  ];

  constructor() { }

  ngOnInit() {
  }

}
