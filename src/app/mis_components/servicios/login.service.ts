import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //esto me sirve para hacer peticiones http
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  // Función para hacer login en la API.
  // Le pasamos como parámetros el nombre de usuario y la contraseña.
  login(username: string, password: string) {
    // Creamos un objeto plano en lugar de convertirlo a string
    const userData = {
      username: username,
      password: password
    };

    // Aquí hacemos la petición POST a la API de login con los datos de usuario y contraseña.
    // Despues, nos suscribimos (escuchamos la comunicación[listener]) a los resultados.
    return this.http.post<{ accessToken: string }>("https://dummyjson.com/auth/login", userData);
  }

  guardarSesion(token: string) {
    localStorage.setItem("token", token);
    this.router.navigate(["/"]);
  }
}
