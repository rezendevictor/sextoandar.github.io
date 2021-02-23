import { Component, OnInit } from '@angular/core';
import { Home } from '../../../domain/home';
import { HomeServices } from '../../services/home.service';
import { ApartamentServices } from '../../services/apartament.service';

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  homes: Home[];
  constructor(private homeService: ApartamentServices) {}

  ngOnInit(): void {
    this.homeService.search().subscribe(res => {this.homes = res.data; console.log(this.homes)}, err=> console.log(err));
    
  }
}
