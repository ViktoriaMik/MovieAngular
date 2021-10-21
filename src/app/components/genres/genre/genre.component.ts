 import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onGenre(): void {
    this.router.navigate([`genre/${this.genre.id}`])
  }
}
