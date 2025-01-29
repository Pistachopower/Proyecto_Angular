import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
  public titulo = 'Bienvenido';
  public empleado: Empleado;
  public trabajador: Empleado[];
  public trabajadoresExterno: boolean;

  constructor() {
    this.empleado = new Empleado('Pedro', 30, "Gerente", true);

    this.trabajador = [
      new Empleado('Manolo', 35, "Administrativo", true),
      new Empleado('Ana', 25, "Programador", true),
      new Empleado('Maria', 28, "Ingeniera", false)
      //hola
    ];

    this.trabajadoresExterno = true;
  }
}
