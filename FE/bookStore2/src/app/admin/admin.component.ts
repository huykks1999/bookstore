import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  active = 'overView'
  constructor(private router: Router) { }
  name;
  ngOnInit(): void {
    this.active = 'overView';
    this.name = localStorage.getItem('name');
    // this.router.navigate(['/admin/tongquan'])
  }

  logout(){
    localStorage.removeItem("admin");
    localStorage.removeItem("name");
    this.router.navigate(['/shared/signin']); 
    alert("Đăng xuất thành công");
    location.reload()
  }

  changeSelected(itemSelected) {
    this.active = itemSelected
    console.log(this.active)
  }


}
