import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  fileName= 'Order.xlsx';  

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
  @ViewChild('closeButton') closeButton;
  listOrders;
  selectedProduct;

  editForm = new FormGroup ({
    // createDate: new FormControl(''),
    // total_money: new FormControl(''),
    // id_customer: new FormControl(''),
    // name: new FormControl(''),
    // phone: new FormControl(''),
    // address: new FormControl(''),
    payment: new FormControl(''),
    status: new FormControl(''),
  })
  
  constructor(private orderService : OrderService, 
    private sharedSerive: SharedServiceService, private router: Router) {
    this.getListOrder();
  }

  ngOnInit(): void {
    
  }

  public closeModal(){
    this.closeButton.nativeElement.click();
  }
  
  getListOrder(){
    this.orderService.get().then(res => {
      this.listOrders = res;
      localStorage.setItem("listOrder", JSON.stringify(res));
      this.paging();
    })
  }

  //delete
  delete(id?) {
    let result = window.confirm("Are you sure delete?");
    if(result) {
      this.orderService.delete(id).then( res => {
        // Success
       this.getListOrder();
      })
    }
  }

  //edit
  openForm(list?){
    this.selectedProduct=list;
    this.editForm.setValue({
      payment: list.payment,
      status: list.status
    })
    
  }

  

  editOrder(){
    let order =  {
      id: this.selectedProduct.id,
      createDate: this.selectedProduct.createDate,
      total_money: this.selectedProduct.total_money,
      id_customer: this.selectedProduct.id_customer,
      name: this.selectedProduct.customer.name,
      phone:  this.selectedProduct.customer.phone,
      address:  this.selectedProduct.customer.address,
      payment: this.editForm.value.payment,
      status: this.editForm.value.status,
    }
    this.orderService.update(order).then(res => {
      this.getListOrder();
    })
    this.closeModal();
  }

  detail(id?){
    this.sharedSerive.changeMessage(id);
    this.router.navigate(['/admin/orderDetail/'+id]);
  }

  listOrderCurrent; //listCurrent
  currentPage = 1;

  paging(event?){
    if(event) {
      this.currentPage = event;
    }
    this.listOrderCurrent = this.listOrders.slice(5*(this.currentPage-1), 5*(this.currentPage));
  }

  search(event?) {
    if(event) {
      this.listOrderCurrent = event;
    }
  }

}
