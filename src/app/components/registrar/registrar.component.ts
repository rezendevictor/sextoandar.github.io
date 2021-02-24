import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'registrarForm',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: ['', []],
      bedrooms: ['', [Validators.required]],
      suites: ['', [Validators.required]],
      livingRooms: ['', [Validators.required]],
      parkingSpots: ['', [Validators.required]],
      size: ['', [Validators.required]],
      hasCloset: ['', [Validators.required]],
      description: ['', []],
      rent: ['', [Validators.required]],
      addressId: ['', []],
      address: this.formBuilder.group({
        id: ['', []],
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
        postalCode: ['', [Validators.required]],
        neighborhoodId: ['', []],
        neighborhood: this.formBuilder.group({
          id: ['', []],
          name: ['', [Validators.required]],
        }),
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
    if (this.form.valid) return;
  }

  get address() {
    return this.form.get('address');
  }

  get neighborhood() {
    return this.form.get('neighborhood');
  }
}
