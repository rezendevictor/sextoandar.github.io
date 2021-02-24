import { Component, OnInit } from '@angular/core';
import { ApartamentServices } from 'src/app/services/apartament.service';

@Component({
  selector: 'houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  title: 'Imóveis';
  apartamentos;

  constructor(private service: ApartamentServices) {
    this.apartamentos = service.search();
  }

  ngOnInit(): void {}
}
