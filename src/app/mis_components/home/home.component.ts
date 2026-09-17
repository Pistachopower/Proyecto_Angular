import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicios/servicio.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  //aqui inyectamos el servicio
  constructor(private servicio: ServicioService) { }
 
  //guardaremos los productos en esta variable
  productos: any = [];

  ngOnInit(): void {
    //console.log('Home Component');
    //llamamos al método getProductos del servicio
    this.servicio.getProductos().subscribe({
      //obtenemos los datos y los guardamos en la variable productos
      next: (data) => { //data es la respuesta del servidor (api)
        this.productos = data.products;
        //console.log('Productos', this.productos);
      },
      error: (error) => {
        console.error('Error fetching productos', error);
      }
    });
   
  }
}


// this.servicio.palabraFiltrada$.subscribe((palabra) => {
//   this.filtro = palabra;
//   this.filtrarProductos(palabra);
//   console.log(palabra);
// });
