import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  listOrderDetail;
  orderId: number;
  constructor(private bookService: BookService,
     private orderDetailService: OrderDetailService,
     private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => this.orderId = params['id']);
    // this.bookService.currentMessage.subscribe(message => this.orderId = message);
    console.log(this.orderId); 
    this.getListByOrderId(this.orderId); 
  }

  getListByOrderId(id){
    this.orderDetailService.getByOrderId(id).then(res => {
     this.listOrderDetail = res;
    }) 
    .catch(err => {
      console.log(err)
    })
  }

}
