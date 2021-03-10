import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { TypeBookService } from 'src/app/service/type-book.service';

@Component({
  selector: 'app-book-by-type-book-id',
  templateUrl: './book-by-type-book-id.component.html',
  styleUrls: ['./book-by-type-book-id.component.css']
})
export class BookByTypeBookIdComponent implements OnInit {
  @ViewChild('closeButtonAdd') closeButtonAdd;
  @ViewChild('closeButtonEdit') closeButtonEdit;
  addForm = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    sale_price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    pages_number: new FormControl('', [Validators.required]),
    type_Book_Id: new FormControl('', [Validators.required]),
    nbx: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required])
  })

  editForm = new FormGroup ({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    sale_price: new FormControl(''),
    image: new FormControl(''),
    pages_number: new FormControl(''),
    type_Book_Id: new FormControl(''),
    nbx: new FormControl(''),
    author: new FormControl(''),
    quantity: new FormControl(''),
    enable: new FormControl('')
  })

  selectedProduct;
  products;
  listProduct;
  typeBookId : number;

  constructor(private router: Router, private typeBookService: TypeBookService, private bookService: BookService) { }

  ngOnInit(): void {
    this.typeBookService.currentMessage.subscribe(message => this.typeBookId = message);
    console.log(this.typeBookId); 
    this.getListBookByTypeBookId(this.typeBookId);
  }

  getListBookByTypeBookId (id) {
    this.listProduct = []
    this.bookService.getByTypeBookId(id).then(res => {
      this.listProduct = res;
      console.log(this.listProduct);
      
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  //delete
  delete(id?) {
    let result = window.confirm("Are you sure delete?");
    if(result) {
      this.bookService.delete(id).then( res => {
        // Success
       this.getListBookByTypeBookId(this.typeBookId);
      })
    }
  }

  //add
  addProduct(){
    let product =  {
      name: this.addForm.value.name,
      image: this.addForm.value.image,
      description: this.addForm.value.description,
      nbx: this.addForm.value.nbx,
      quantity: this.addForm.value.quantity,
      price: this.addForm.value.price,
      sale_price: this.addForm.value.price,
      author: this.addForm.value.author,
      pages_number: this.addForm.value.pages_number,
      type_Book_Id: this.typeBookId,
    }
    this.bookService.add(product).then(res => {
      this.getListBookByTypeBookId(this.typeBookId);;
    });
    this.closeModal("add");
    this.addForm.reset();
  };

  public closeModal(check): void {
    if(check == "add"){
      this.closeButtonAdd.nativeElement.click();
    }else
    this.closeButtonEdit.nativeElement.click();
  }

  //edit
  openForm(list?){
    this.selectedProduct=list;
    this.editForm.setValue({
      name: list.name,
      description: list.description,
      price: list.price,
      sale_price: list.sale_price,
      image: list.image,
      pages_number: list.pages_number,
      type_Book_Id: list.type_Book_Id,
      nbx: list.nbx,
      author: list.author,
      quantity: list.quantity,
      enable: list.enable
    })
  }

  editProduct(){
    let product =  {
      id: this.selectedProduct.id,
      name: this.editForm.value.name,
      description: this.editForm.value.description,
      price: this.editForm.value.price,
      sale_price: this.editForm.value.sale_price,
      image: this.editForm.value.image,
      pages_number: this.editForm.value.pages_number,
      type_Book_Id: this.typeBookId,
      nbx: this.editForm.value.nbx,
      author: this.editForm.value.author,
      quantity: this.editForm.value.quantity,
      enable: this.editForm.value.enable,
    }
    this.bookService.update(product).then(res => {
      this.getListBookByTypeBookId(this.typeBookId);
    })
    this.closeModal("edit");
  }
}
