import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Sistema de Registro de Empleados';
  curso:string = ' ' + 'Atos';
  profesor:string = ' ' + 'Enrique Seco Orriols';
}
