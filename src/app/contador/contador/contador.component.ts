import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <span>{{titulo}}</span>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <br>
    <br>

    <button (click)="acomular(-base)">-{{base}}</button>
    <span>CONTADOR: {{numero}}</span>
    <button (click)="acomular(base)">+{{base}}</button>
    `
})
export class ContadorComponent{
  titulo: string = 'Contador App';
  numero: number = 0;
  base  : number = 5;

  acomular(valor: number): number{
    return this.numero+= valor;
  }
}
