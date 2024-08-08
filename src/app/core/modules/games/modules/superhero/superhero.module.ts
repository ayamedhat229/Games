import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroRoutingModule } from './superhero-routing.module';
import { SuperheroComponent } from './superhero.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    SuperheroComponent
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    SharedModule
  ]
})
export class SuperheroModule { }
