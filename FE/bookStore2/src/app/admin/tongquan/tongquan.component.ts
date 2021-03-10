import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { TypeBookService } from 'src/app/service/type-book.service';

@Component({
  selector: 'app-tongquan',
  templateUrl: './tongquan.component.html',
  styleUrls: ['./tongquan.component.css']
})
export class TongquanComponent implements OnInit {

  constructor(private tb : TypeBookService, private b : BookService, private c : CustomerService, private o : OrderService) {

  }

  ngOnInit(): void {
    this.getAllTypeBook();
    this.getAllBook();
    this.getAllCustomer();
    this.getAllOrder();
    window.scroll(0,0)
  }

  countTB: number;
  listTB;
  countB: number;
  listB;
  countC: number;
  listC;
  countO: number;
  listO;

  getAllTypeBook () {
    this.listTB = [];
    this.tb.get().then(res => {
      this.listTB = res;
      this.countTB = this.listTB.length;
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  getAllBook () {
    this.listB = [];
    this.b.get().then(res => {
      this.listB = res;
      this.countB = this.listB.length;
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  getAllCustomer () {
    this.listC = [];
    this.c.get().then(res => {
      this.listC = res;
      this.countC = this.listC.length;
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  getAllOrder () {
    this.listO = [];
    this.o.get().then(res => {
      this.listO = res;
      this.countO = this.listO.length;
    }) 
    .catch(err => {
      console.log(err)
    })
  }


  // scroll() {
  //   this.cAnimate("counter", 0, this.countTB, 50);
  //   this.cAnimate("counter2", 0, this.countB, 50);
  //   this.cAnimate("counter3", 0, this.countC, 50);
  //   this.cAnimate("counter4", 0, this.countO, 50);
  // };

  // cAnimate(id, start, end, frameDelay = 100, mul = 1.2) {
  //   var obj = document.getElementById(id);
  //   var increment = 1;
  //   var current = start;
  //   var timer = setInterval(function() {
  //       current += increment;
  //       increment *= mul;
  //       if (current >= end) {
  //           current = end;
  //           clearInterval(timer);
  //       }
  //       obj.innerHTML = Math.floor(current).toLocaleString();
  //   }, frameDelay);
    
  // }

}
