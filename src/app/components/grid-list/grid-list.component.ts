import { Component, OnInit } from '@angular/core';
import { Home } from '../../../domain/home';
import { HomeServices } from '../../services/home.service';

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  homes: Home[] = [
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
    {
      id: 1,
      bedrooms: 1,
      livingRooms: 1,
      rent: 1,
      parkingSpots: 1,
      suites: 1,
      size: 1,
      hasCloset: true,
      addressId: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tortor vel tortor commodo rhoncus. Nunc eget ultricies dolor. Donec sed nulla id metus euismod condimentum. Donec maximus hendrerit ipsum, id eleifend odio scelerisque sed. Nam viverra congue ornare. Aenean commodo placerat sollicitudin. Aenean finibus viverra eros eu convallis. Proin erat dolor, rutrum non tortor hendrerit, imperdiet iaculis ante. Suspendisse faucibus nisl eget suscipit ullamcorper. Maecenas ut pretium nunc. Suspendisse potenti.',
      address: {
        id: 1,
        street: '',
        postalCode: '',
        number: 1,
        neighborhood: { name: 'LALAL', id: 1 },
        neighborhoodId: 1,
      },
    },
  ];
  constructor(private homeService: HomeServices) {}

  ngOnInit(): void {
    //this.homeService.search().subscribe(res => this.homes = res)
  }
}
