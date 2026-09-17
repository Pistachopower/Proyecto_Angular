import { Component, OnInit } from "@angular/core";
import { ServicioService } from "../servicios/servicio.service";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: "app-productos",
  imports: [CommonModule], //para las directivas de ngIf y ngFor
  templateUrl: "./productos.component.html",
  styleUrl: "./productos.component.css",
})
export class ProductosComponent {
  productos: any = [];
  filtro: string = "";
  ordenarAscendente: boolean = true; // Booleano para controlar el orden
  productosNoEncontrados= false;

  //llamamos a la clase ServicioService con todas sus propiedades y métodos
  constructor(private servicio: ServicioService, private router: Router) {
    //nos suscribimos a la variable palabraFiltrada$ para que cuando
    //cambie el valor de la variable palabraFiltrada se ejecute el método
    //filtrarProductos
    
    this.servicio.palabraFiltrada$.subscribe((palabra) => {
      this.filtro = palabra;
      this.filtrarProductos(palabra);
      console.log(palabra);
    });
  }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe({
      next: (data) => {
        this.servicio.productos = data.products;
        this.productos = data.products;

        if (this.filtro != "") { //se ejecuta cuando buscas desde el header o home
          this.filtrarProductos(this.filtro);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //método para filtrar productos
  filtrarProductos(palabra: string) {
    if (palabra != "") {
      this.productos = this.servicio.productos.filter((producto: any) => {
        //si la palabra existe en la api devuelve array
        return producto.title.toLowerCase().includes(palabra.toLowerCase());
      });

      //cuando el array esta vacio
      if (this.productos.length == 0) {
        this.productosNoEncontrados = true;
      } else {
        this.productosNoEncontrados = false;
      }
    } else {
      this.productos = [...this.servicio.productos];
      this.productosNoEncontrados = false;
    }
  }

  //método para ordenar productos
  ordenarProductos(sort: string) {
    const orden = sort === 'desc' ? -1 : 1;
    this.productos = [...this.productos].sort((a: any, b: any) =>
      a.title.localeCompare(b.title) * orden
    );
  }

  ordenarPorPrecio() {
    const orden = this.ordenarAscendente ? 1 : -1;
    this.productos = [...this.productos].sort((a: any, b: any) =>
      (a.price - b.price) * orden
    );
    this.ordenarAscendente = !this.ordenarAscendente; // Cambia el valor del booleano
  }

  verDetalle(id: number) {
    this.router.navigate(['/detalle', id]); //sirve para ir a la ruta detalle
  }

}
