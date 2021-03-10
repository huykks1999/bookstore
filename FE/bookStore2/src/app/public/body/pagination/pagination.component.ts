import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() numberProduct: any;
  @Output() OutCurrentPage = new EventEmitter<Number>();

  numberPage = [];
  currentPage = 1
  maxPage;

  isStop: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.numberProduct)
    this.maxPage = Math.ceil(this.numberProduct / 6)
    for (let i = 1; i <= this.maxPage; i++) {
      this.numberPage.push(i);
    }
  }

  downPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.setOutCurrentPage()
    }
  }

  upPage() {
    if (this.currentPage < this.maxPage) {
      this.currentPage = this.currentPage + 1;
      this.setOutCurrentPage()
    }
  }

  toPage(pageNumber) {
    this.currentPage = pageNumber;
    this.setOutCurrentPage()
  }

  setOutCurrentPage () {
    console.log(this.currentPage)
    this.OutCurrentPage.emit(this.currentPage)
  }
}
