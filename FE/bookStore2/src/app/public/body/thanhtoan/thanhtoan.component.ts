import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent implements OnInit {
  customerLogined;
  total;
  products=[];
  arr=[];
  idCus;
  constructor
  ( 
    private orderService: OrderService, 
    private orderDetailService: OrderDetailService,
    private router: Router
  )
  {
    this.customerLogined = JSON.parse(localStorage.getItem("customerLogined"));
    this.total = JSON.parse(localStorage.getItem("total"));
    this.products = JSON.parse(localStorage.getItem("products"));
  }

  ngOnInit(): void {
    
    this.open();
  }

  formThanhToan = new FormGroup({
    name : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    // payment : new FormControl('',[Validators.required]),
  })
  open(){
    this.formThanhToan.setValue({
      name: this.customerLogined.name,
      phone: this.customerLogined.phone,
      address: this.customerLogined.address,
      // payment: 'aaaaaaaaaaa'
    })
    this.products.forEach((item) => {
      let OD = {
        quantity: item.count,
        price: item.price,
        id_book: item.id
      };
      this.arr.push(OD)
      console.log(OD);
    })
  }
  submitThanhToan() {
    this.idCus = +localStorage.getItem('idCus');

    let orders = {
      createDate: Date.now(),
      total_money: this.total,
      name: this.formThanhToan.value.name,
      phone: this.formThanhToan.value.phone,
      address: this.formThanhToan.value.address,
      id_customer: this.idCus,
      payment: 'Offline',
      status: 'Chưa thanh toán'
    }
    let result = window.confirm("Are you sure order?");
    if (result) {
      this.orderService.add(orders).then(() => {
        this.orderDetailService.add(this.arr).then(() => {
          sessionStorage.removeItem("productCart");
          localStorage.removeItem('products');
          localStorage.removeItem('total');
          this.router.navigate(['/public/order']).then(() => {
            location.reload();
          });
        });
        
      })
    }
  }

}
