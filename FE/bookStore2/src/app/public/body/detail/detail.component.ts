import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Model/book.model';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book: Book;
  idBook: number;
  constructor(private bookService: BookService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idBook = params['id'];
    });
    // this.bookService.currentMessage.subscribe(message => this.idBook = message);
    this.getBookById(this.idBook);
    window.scrollTo(0,0);
  }

  getBookById(id) {
    this.bookService.getById(id).then(res => {
      this.book = <any>res;
    })
      .catch(err => {
        console.log(err)
      })
  }

  addProductToCart() {
    this.cartService.addProductToCart(this.book);
  }

}
