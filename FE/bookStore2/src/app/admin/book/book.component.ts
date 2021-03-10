import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {
  fileName= 'Book.xlsx';  

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
    
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

  listBookCurrent; //listCurrent
  currentPage = 1;

  products;
  listProduct;
  selectedProduct;
  enable = "true";
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.getListProduct();
  }

  // get
  getListProduct () {
    this.listProduct = []
    this.bookService.get().then(res => {
      this.listProduct = res;
      this.paging();
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
       this.getListProduct();
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
      type_Book_Id: this.addForm.value.type_Book_Id,
    }
    this.bookService.add(product).then(res => {
      this.getListProduct();
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
      type_Book_Id: this.editForm.value.type_Book_Id,
      nbx: this.editForm.value.nbx,
      author: this.editForm.value.author,
      quantity: this.editForm.value.quantity,
      enable: this.editForm.value.enable,
    }
    this.bookService.update(product).then(res => {
      this.getListProduct();
    })
    this.closeModal("edit");
  }

  paging(event?){
    if(event) {
      this.currentPage = event;
    }
    this.listBookCurrent = this.listProduct.slice(5*(this.currentPage-1), 5*(this.currentPage));
  }

  search(event?) {
    if(event) {
      this.listBookCurrent = event;
    }
  }
}
