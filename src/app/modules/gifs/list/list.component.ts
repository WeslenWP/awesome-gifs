import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListGifsComponent implements OnInit {
  items: any;
  alert: boolean = false;
  constructor(private _gifService: GifsService) { }

  ngOnInit(): void {
    this._gifService.getGifs().then((res) => this.items = res);
  }
}
