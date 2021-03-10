import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/book.model';
import { Order } from 'src/app/Model/order.model';
import { CartService } from 'src/app/service/cart.service';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];

  constructor(
    private cartService: CartService, 
    private orderService: OrderService, 
    private orderDetailService: OrderDetailService,
    private router: Router) 
    {}

  ngOnInit(): void {
    this.setCountProduct();
  }
  idCus: number;
  countNum: number = 0;
  products = [];
  total: number = 0;
  payment = "Offline";
  status = "Chưa thanh toán";
  arr = [];

  // orders : Order;
  setCountProduct() {
    let items = this.cartService.getCart();
    let selected = {};
    this.countNum = items.length;

    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      }
      else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.products = Object.keys(selected).map(key => selected[key])
    this.total = this.products.reduce((a, b) => a + (b.count * b.price), 0);


    console.log(this.products);
    localStorage.setItem("products", JSON.stringify(this.products));
    localStorage.setItem("total", JSON.stringify(this.total));

    // this.products.forEach((item) => {
    //   let OD = {
    //     quantity: item.count,
    //     price: item.price,
    //     id_book: item.id
    //   };

    //   console.log(OD);
    //   this.arr.push(OD)
    // });
    // console.log(this.arr)
    // localStorage.setItem("arr", JSON.stringify(this.arr));
  }

  addToCart(product: Book) {
    this.total = this.total + Number(product.price);
    this.cartService.addProductToCart(product);
    this.setCountProduct();
  }

  deleteProductToCart(product: Book) {
    this.total = this.total - Number(product.price);
    this.cartService.deleteProductToCart(product.name);
    this.setCountProduct();
  }

  removeProduct(product) {
    this.cartService.removeProduct(product.name, product.count);
    this.setCountProduct();
  }


  thanhtoan() {
    this.router.navigate(['/public/thanhtoan'])
    // this.idCus = +localStorage.getItem('idCus');

    // let orders = {
    //   createDate: Date.now(),
    //   total_money: this.total,
    //   id_customer: this.idCus,
    //   payment: this.payment,
    //   status: this.status
    // }
    // let result = window.confirm("Are you sure order?");
    // if (result) {
    //   this.orderService.add(orders).then(() => {
    //     this.orderDetailService.add(this.arr).then(() => {
    //       sessionStorage.removeItem("productCart");
    //       this.router.navigate(['/public/order']).then(() => {
    //         location.reload();
    //       });
    //     });
        
    //   })
    // }
  }

}
