import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  customer: Customer
  roleAdmin = 'Admin';
  alertLogin = false;
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }
  
  LoginForm = new FormGroup({
    email : new FormControl('',[Validators.required]),
    passWord : new FormControl('',[Validators.required])
  })

  submitLogin(){
    this.customerService.getByEmail(this.LoginForm.value.email).then(res => {
      this.customer = <any>res;
      if(this.customer.passWord == this.LoginForm.value.passWord && this.customer.role == this.roleAdmin){
        console.log("login success");
        localStorage.setItem('admin','admin')
        localStorage.setItem('name',this.customer.name);
        this.router.navigate(['/admin/tongquan']);
        alert("Admin Đăng nhập thành công")
      }else {
        console.log("login failse");
        this.alertLogin = true;
        
      }
     }) 
     .catch(err => {
       console.log(err)
       this.alertLogin = true;
     })
  }

}
