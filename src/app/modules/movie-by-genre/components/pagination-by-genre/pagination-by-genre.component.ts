import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination-by-genre',
  templateUrl: './pagination-by-genre.component.html',
  styleUrls: ['./pagination-by-genre.component.css']
})
export class PaginationByGenreComponent implements OnInit {
  page: number
  currentPage: number
  @Output()
  lift = new EventEmitter<number>();

  constructor() {
    this.page = 1;
  }

  ngOnInit(): void {
  }
  onSinglePageChanged(pageNumber:number): void {
    this.currentPage = pageNumber;
    this.lifting();
  }
  lifting(): void {
    this.lift.emit(this.currentPage)
  }
}
