import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  fileName= 'Customer.xlsx';  

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
    email: new FormControl('',[Validators.required]),
    passWord: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    role: new FormControl('',[Validators.required])
  })

  editForm = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    passWord: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    role: new FormControl(''),
  })

  customers;
  listCustomer;
  selectedCustomer;
  roleUser="User";

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getListCustomer();
  }

  // get
  getListCustomer() {
    this.listCustomer = []
    this.customerService.get().then(res => {
      this.listCustomer = res;
      this.paging();
      console.log(this.listCustomer);
      
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  //delete
  delete(id?) {
    let result = window.confirm("Are you sure delete?");
    if(result){
      this.customerService.delete(id).then( res => {
        // Success
       this.getListCustomer();
      })
    }
    
  }

  //add
  addCustomer(){
    let customer =  {
      name: this.addForm.value.name,
      email: this.addForm.value.email,
      passWord: this.addForm.value.passWord,
      phone: this.addForm.value.phone,
      address: this.addForm.value.address,
      role: this.roleUser
    }
    this.customerService.add(customer).then(res => {
      this.getListCustomer();
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
    this.selectedCustomer=list;
    this.editForm.setValue({
      name: list.name,
      email: list.email,
      passWord: list.passWord,
      phone: list.phone,
      address: list.address,
      role: list.role,
    })
  }

  editCustomer(){
    let customer =  {
      id: this.selectedCustomer.id,
      name: this.editForm.value.name,
      email: this.editForm.value.email,
      passWord: this.editForm.value.passWord,
      phone: this.editForm.value.phone,
      address: this.editForm.value.address,
      role: this.editForm.value.role,
    }
    this.customerService.update(customer).then(res => {
      this.getListCustomer();
    })
    this.closeModal("edit");
  }

  listCustomerCurrent; //listCurrent
  currentPage = 1;

  paging(event?){
    if(event) {
      this.currentPage = event;
    }
    this.listCustomerCurrent = this.listCustomer.slice(5*(this.currentPage-1), 5*(this.currentPage));
  }

  search(event?) {
    if(event) {
      this.listCustomerCurrent = event;
    }
  }
}
