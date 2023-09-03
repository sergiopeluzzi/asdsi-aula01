import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string = 'Sergio';
  idade: number = 37;
  sexo: string = 'M';
}
