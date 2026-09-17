import { Component } from "@angular/core";
import { LoginService } from "../servicios/login.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  imports: [FormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  error = "";

  constructor(private servicioLogin: LoginService) {}

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.error = "";
    this.servicioLogin.login(username, password).subscribe({
      next: (response) => this.servicioLogin.guardarSesion(response.accessToken),
      error: () => this.error = "Usuario o contraseña incorrectos."
    });
  }
}
