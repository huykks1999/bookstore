import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeBookService } from 'src/app/service/type-book.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-type-book',
  templateUrl: './type-book.component.html',
  styleUrls: ['./type-book.component.css']
})
export class TypeBookComponent implements OnInit {

  fileName= 'TypeBook.xlsx';  

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
    name: new FormControl('',[Validators.required]),
  })

  editForm = new FormGroup ({
    name: new FormControl(''),
  })

  listTypeBookCurrent; //listCurrent
  currentPage = 1;

  products;
  listProduct;
  selectedProduct;
  message : number;
  selectedId;

  constructor(private router: Router, private typeBookService: TypeBookService) { }

  ngOnInit(): void {
    this.getListProduct();
    this.typeBookService.currentMessage.subscribe(message => this.message = message);
  }

  // get
  getListProduct () {
    this.listProduct = []
    this.typeBookService.get().then(res => {
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
    if(result){
      this.typeBookService.delete(id).then( res => {
        // Success
       this.getListProduct();
      })
    }
    
  }

  //add
  addProduct(){
    let product =  {
      name: this.addForm.value.name,
    }
    this.typeBookService.add(product).then(res => {
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
    })
  }

  editProduct(){
    let product =  {
      id: this.selectedProduct.id,
      name: this.editForm.value.name
    }
    this.typeBookService.update(product).then(res => {
      this.getListProduct();
    })
    this.closeModal("edit");
  }

  //bắn Id cho BookByTypeBookId
  detail(id?){
    this.selectedId = id;
    this.typeBookService.changeMessage(id);
    this.router.navigate(['/admin/bookByTypeBookId']);
  }

  paging(event?){
    if(event) {
      this.currentPage = event;
    }
    this.listTypeBookCurrent = this.listProduct.slice(5*(this.currentPage-1), 5*(this.currentPage));
  }

  search(event?) {
    if(event) {
      this.listTypeBookCurrent = event;
    }
  }

  
}
