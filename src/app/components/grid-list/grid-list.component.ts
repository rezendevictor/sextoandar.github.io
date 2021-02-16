import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ImovelComponent} from   'src/app/components/imovel/imovel.component';

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  hehe = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit(): void {
  }

}
