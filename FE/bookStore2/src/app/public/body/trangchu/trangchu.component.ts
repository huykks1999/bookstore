import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Model/book.model';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { TypeBookService } from 'src/app/service/type-book.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  listBook; //all
  listBookByType; //list theo type
  listTypeBook; //allListType
  listBookCurrent; //listCurrent
  currentTypeBook: number; //idType
  currentPage = 1;
  message : number;
  constructor(private bookService: BookService, 
    private router: Router, 
    private cartService: CartService,
    private typeBookService : TypeBookService
    ) { }

  ngOnInit(): void {
    this.getListBook();
    this.getListTypeBook();
    this.bookService.currentMessage.subscribe(message => this.message = message);
  }

  getListTypeBook() {
    this.typeBookService.get().then(res => {
      this.listTypeBook = res; 
    });
  }

  countListBookByType(){
    let temp = []
    for(let i=0; i < this.listBook.length; i++){
      let element = this.listBook[i];
      if(element.type_Book_Id == this.currentTypeBook) {
        temp.push(element)
      }
    }
    this.listBookByType = temp;
  }

  countListBookCurrent() {
    let temp = []
    for(let i=0; i < this.listBook.length; i++){
      let element = this.listBook[i];
      if(element.type_Book_Id == this.currentTypeBook) {
        temp.push(element)
      }
    }
    this.listBookCurrent = temp
  }

  selectTP(id){
    if(id==0){
      this.getListBook();
    }
    this.currentTypeBook=id;
    this.countListBookCurrent();
    console.log(this.listBookCurrent);
  }

  getListBook () {
    this.listBook = []
    this.bookService.get().then(res => {
      this.listBook = res;
      this.paging();
      console.log(this.listBook);
      
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  detail(id?){
    this.bookService.changeMessage(id);
    this.router.navigate([`/public/detail/${id}`]);
  }

  addProductToCart(product: Book){
    this.cartService.addProductToCart(product);
  }

  paging(event?){
    if(event) {
      this.currentPage = event;
    }
    this.listBookCurrent = this.listBook.slice(9*(this.currentPage-1), 9*(this.currentPage));
  }

  search(event?) {
    if(event) {
      this.listBookCurrent = event;
    }
  }
}
