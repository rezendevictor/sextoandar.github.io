import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() id = 0;
  @Input() name = '';
  @Input() adress = '';
  @Input() photoUrl = '';
  @Input() type = '';

  @Input() n_quartos = '';
  @Input() n_suites = '';
  @Input() n_salas = '';
  @Input() description = '';
  @Input() vagas = '';
  @Input() area = '';
  @Input() armarioEmbutido = '';

  @Input() aluguel = '';
}
