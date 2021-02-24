import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApartamentServices } from '../../services/apartament.service';
import { VisitServices } from '../../services/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css'],
})
export class VisitComponent implements OnInit {
  id: string;
  form: FormGroup;
  unavailableDates: Date[] = [];
  date = new FormControl(); 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private apartamentService: ApartamentServices,
    private visitService: VisitServices
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      date: [''],
      propertyID: [''],
      visitorCPF: [''],
    });
  }
  myFilter = (d: Date | null): boolean => {
    const existingDates = this.unavailableDates.filter(
      (unavailable) => unavailable.getTime() == d.getTime()
    );
    return existingDates.length == 0;
  };

  readonly getRouteId = {
    next: (params) => {
      this.id = params['id'];
      console.log(this.id)
      this.getResourceDetails(this.id);
    },
  };

  getResourceDetails(id: string) {
    this.apartamentService.get(id).subscribe((houseResponse: any) => {
      this.unavailableDates = houseResponse.data.nonAvailable.map((data) => {
        const d = new Date(data);
        d.setHours(0, 0, 0, 0);
        return d;
      });
    });
  };


  ngOnInit(): void {
    this.route.params.subscribe(this.getRouteId);
  }

  submit() {
    this.form.get("id").setValue(Math.random() + this.id)
    this.form.get("propertyID").setValue(this.id)
    this.form.get("date").setValue(this.date.value)
    if (this.form.valid) {
      this.visitService.insert(this.form.value).subscribe((res) => {
        console.log('res', JSON.stringify(res));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Visita cadastrada',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      
    }
  }
}
