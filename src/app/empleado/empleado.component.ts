import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

//esta es una definicion de  una clase
export class EmpleadoComponent {
  //defines los atributos
  public titulo = 'El empleado';
  public cargo = 'administrador';
  public contratado = 'si';

  //definimos el array
  public trabajadores:Array<string> = [];
  

  constructor() {
    //rellenamos el array de trabajadores
    this.trabajadores= ['juan', 'maria']; 
  }
}
