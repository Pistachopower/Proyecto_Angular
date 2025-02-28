import { Component } from '@angular/core';
import { HomeComponent } from "./mis_components/home/home.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./mis_components/header/header.component";

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,HeaderComponent],
})
export class AppComponent {
  title = 'angApp_v19';
}
