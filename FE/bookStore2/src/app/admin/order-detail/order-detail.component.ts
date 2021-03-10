import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { SharedServiceService } from 'src/app/service/shared-service.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  listOrderDetail;
  orderId: number;
  constructor(private sharedService: SharedServiceService, 
    private orderDetailService: OrderDetailService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.sharedService.currentMessage.subscribe(message => this.orderId = message);
    this.router.params.subscribe(params => this.orderId = params['id']);
    console.log(this.orderId); 
    this.getListByOrderId(this.orderId); 
  }

  getListByOrderId(id){
    this.orderDetailService.getByOrderId(id).then(res => {
     this.listOrderDetail = res;
    }) 
    .catch(err => {
      console.log(err)
    })
  }

}
