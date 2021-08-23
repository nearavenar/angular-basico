import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  /* declarations: Que cosas contiene este modulo (componentes, Pipes)*/
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],

  /* declarations: Que cosas quiero que sean visibles fuera de este modulo*/
  exports:[
    ListadoComponent
  ],

  /* imports: Aca dentro van modulos (solo modulos)*/
  imports:[
    CommonModule
  ]

})
export class HeroesModule{

}
