import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Flash'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    //while(this.heroes.length > 0){
      this.heroeBorrado = this.heroes.pop() || '';
    //}
  }
}
