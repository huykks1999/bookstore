import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
  listOrder;
  listCC=[];
  constructor() {

   }

  ngOnInit(): void {
    this.listOrder = JSON.parse(localStorage.getItem("listOrder"));
    this.thongke();
  }

  thongke(){
    let now = new Date();
    let currentMonth = now.getMonth()+1;
    console.log(currentMonth);
    
    for(let i = 1; i <= currentMonth; i++){
      this.listCC.push(this.sldh(i))
    }
    console.log(this.listCC);
    
  }

  sldh(month?) {
    let arr=[];
    this.listOrder.forEach((item) => {
      let itemDate = new Date(item.createDate)
      if(itemDate.getMonth()+1==month){
        arr.push(item);
      }
    })
    let sldh = arr.length;
    let doanhthu = 0;
    arr.forEach((item) => {
      doanhthu += item.total_money;
    })
    return {
      month: month,
      sldh: sldh,
      doanhthu: doanhthu
    }
  }
}
