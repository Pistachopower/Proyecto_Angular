import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private readonly apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {  
  }
    //inicializamos la variable productos, palabraFiltrada
    productos: any= [];
    router: any; //


  //creamos una variable palabraFiltrada de tipo BehaviorSubject para guardar 
  // valores anteriores y 
  // una variable palabraFiltrada$ de tipo Observable para 
  // que los componentes puedan suscribirse (comunicarse) a ella (palabraFiltrada)
  private palabraFiltrada= new BehaviorSubject<string>(''); //se inicializa con un string vacío 
  palabraFiltrada$= this.palabraFiltrada.asObservable(); //observable: permite suscribirse (listener) a un evento

  //creamos un método updatePalabraFiltrada que recibe un string
  //para actualizar el valor de la variable palabraFiltrada
  updatePalabraFiltrada(palabra: string){
    this.palabraFiltrada.next(palabra); //next: método para actualizar el valor de la variable

  }

  getProductos(){
    return this.http.get<{ products: any[] }>(this.apiUrl);
  }


  sortProductos(sort: string){
    const order = sort === 'desc' ? 'desc' : 'asc';
    return this.http.get<{ products: any[] }>(`${this.apiUrl}?sortBy=title&order=${order}`);
  }

  getProductoById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
