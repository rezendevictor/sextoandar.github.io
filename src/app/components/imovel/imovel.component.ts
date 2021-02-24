import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() homeObject = null;
}
