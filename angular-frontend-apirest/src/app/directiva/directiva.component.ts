import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})

export class DirectivaComponent {

  listaCurso: string [] = ['Gerente', 'Supervisor', 'Empleado Interno', 'Empleado Externo', 'Proveedor']
  
  show: boolean = true;

  constructor(){ 
    /* TODO document why this constructor is empty */  
  }

  setHabilitar():void{
    this.show = (this.show==true)? false: true;
  } 

}
