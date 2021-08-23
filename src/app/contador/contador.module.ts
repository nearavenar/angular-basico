import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  /* declarations: Que cosas contiene este modulo (componentes, Pipes)*/
  declarations:[
    ContadorComponent
  ],

  /* declarations: Que cosas quiero que sean visibles fuera de este modulo*/
  exports:[
    ContadorComponent
  ],

  /* imports: Aca dentro van modulos (solo modulos)*/
  imports:[

  ]

})
export class ContadorModule{

}
