import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number
  currentPage: number
  @Output()
  lift = new EventEmitter<number>();
  constructor() {
    this.page = 1;
  }

  ngOnInit(): void {
  }
  onPageChange(pageNumber:number): void {
    this.currentPage = pageNumber;
    this.lifting();
  }
  lifting(): void {
    this.lift.emit(this.currentPage)
  }
}
