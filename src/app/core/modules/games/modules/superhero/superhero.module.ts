import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroRoutingModule } from './superhero-routing.module';
import { SuperheroComponent } from './superhero.component';


@NgModule({
  declarations: [
    SuperheroComponent
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule
  ]
})
export class SuperheroModule { }
