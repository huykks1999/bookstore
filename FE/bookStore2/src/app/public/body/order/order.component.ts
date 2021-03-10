import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  listOrders;
  listOrderCurrent; //listCurrent
  currentPage = 1;
  constructor(private orderService : OrderService, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getListOrder();
  }
  
  getListOrder(){
    this.orderService.getByCustomerId(+localStorage.getItem("idCus")).then(res => {
      this.listOrders = res;
      this.paging();
    })
  }

  detail(id?){
    this.bookService.changeMessage(id);
    this.router.navigate(['/public/orderDetail/'+ id]);
  }

  paging(event?){
    if(event) {
      this.currentPage = event;
    }
    this.listOrderCurrent = this.listOrders.slice(6*(this.currentPage-1), 6*(this.currentPage));
  }

}
