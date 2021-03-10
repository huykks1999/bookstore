import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer.model';
import { CartService } from 'src/app/service/cart.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false; // dang nhap thanh cong thi set bang TRUE
  @ViewChild('closeButton') closeButton;
  @ViewChild('modal') modal;
  customer: Customer;
  customerLogined : Customer;
  roleUser = 'User';
  emailCus: string;
  message : string;
  countBookInCart : number;
  alertLogin = false;
  // a:any;
  constructor(private router: Router, private customerService: CustomerService, private cartService: CartService) {
    this.cartService.currentMessage.subscribe(
      message => {
      if(message == "added"){
        this.countBookInCart++;
      }
      else if(message == "removed") {
        this.countBookInCart--;
      }
      else{
        this.checkCart();
      }
    });
    
  }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.customerLogined = JSON.parse(localStorage.getItem("customerLogined"));
    this.emailCus = localStorage.getItem("email");
    if("user" == localStorage.getItem("user")){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
  }

  RegisterForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    passWord : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    role : new FormControl('',[Validators.required]),
  })

  LoginForm = new FormGroup({
    email : new FormControl('',[Validators.required]),
    passWord : new FormControl('',[Validators.required])
  })

  public closeModal(): void {
    this.closeButton.nativeElement.click();
  }

  public openModal(): void {
    this.modal.nativeElement.click();
  }
  submitLogin(){
    this.customerService.getByEmail(this.LoginForm.value.email).then(res => {
      this.customer = <any>res;
      if(this.customer.passWord == this.LoginForm.value.passWord && this.customer.role == this.roleUser){
        console.log("login success");
        alert('Đăng nhập thành công')
        localStorage.setItem("customerLogined", JSON.stringify(this.customer));
        localStorage.setItem('user','user');
        localStorage.setItem('email', this.customer.email);
        localStorage.setItem('idCus', this.customer.id.toString());
        this.closeModal();
      }else {
        console.log("login failse");
        this.alertLogin = true;
      }
     }) 
     .catch(err => {
       console.log(err);
       this.alertLogin = true;
     })
    

  }
  

  submitSignUp(){
    let customer =  {
      name: this.RegisterForm.value.name,
      email: this.RegisterForm.value.email,
      passWord: this.RegisterForm.value.passWord,
      phone: this.RegisterForm.value.phone,
      address: this.RegisterForm.value.address,
      role: this.roleUser
    }
    this.customerService.add(customer);
    this.closeModal();
    this.RegisterForm.reset();
    console.log("add success"); 
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("idCus");
    localStorage.removeItem("customerLogined");
    sessionStorage.removeItem("productCart");
    this.countBookInCart = 0;
    this.router.navigate(['/public/home']);
    console.log("logout success");
    alert('Đăng xuất thành công')
    location.reload() 
  }
  
  logined = "modalLRForm";
  toCart() {
    if("user" == localStorage.getItem("user")){
      this.router.navigate(['/public/cart']);
    }
    else {
      this.openModal();
    }
  }

  checkCart() {
    this.countBookInCart = this.cartService.getCart().length;
  }

  close() {
    this.LoginForm.reset();
    this.RegisterForm.reset();
  }


  
}
