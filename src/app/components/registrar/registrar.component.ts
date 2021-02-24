import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HomeServices } from '../../services/home.service';

@Component({
  selector: 'registrarForm',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  providers: [HomeServices],
})
export class RegistrarComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private homeServices: HomeServices
  ) {
    const ex = {
      id: 'caiubi',
      address: {
        state: 'MG',
        city: 'BH',
        street: 'Av Amazonas',
        number: '7675',
        complement: 'Casa',
        reference: 'Ao lado do falecido barranco',
      },
      ownerID: '12345',
      description: 'CEFET',
      rent_value: 10,
      rooms: 1337,
      garage_spots: 420,
      living_rooms: 1,
      suites: 0,
      area: 123456789,
      cabinet: false,
      concierge24: true,
    };

    this.form = this.formBuilder.group({
      id: ['asd' + Math.random(), []],
      ownerID: ['caiubi', []],
      rooms: ['1', [Validators.required]],
      suites: ['1', [Validators.required]],
      living_rooms: ['1', [Validators.required]],
      garage_spots: ['1', [Validators.required]],
      area: ['1', [Validators.required]],
      is_apartament: ['true', [Validators.required]],
      cabinet: ['false', [Validators.required]],
      description: ['asd' + Math.random(), []],
      rent_value: ['1', [Validators.required]],
      address: this.formBuilder.group({
        id: ['', []],
        street: ['R', [Validators.required]],
        number: ['1', [Validators.required]],
        state: ['mg', [Validators.required]],
        city: ['bh', [Validators.required]],
        complement: ['1', [Validators.required]],
        reference: ['asd', [Validators.required]],
        neighborhood: ['asd', [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {
    console.log('teste');
  }
  submit() {
    console.log(this.form);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    if (this.form.valid) {
      const response = this.homeServices
        .insert(this.form.value)
        .subscribe((res) => {
          console.log('res', JSON.stringify(res));
        });
      console.log(response);
    }
  }

  get address() {
    return this.form.get('address');
  }

  get neighborhood() {
    return this.form.get('neighborhood');
  }
}
