import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixelsRoutingModule } from './pixels-routing.module';
import { PixelsComponent } from './pixels.component';


@NgModule({
  declarations: [
    PixelsComponent
  ],
  imports: [
    CommonModule,
    PixelsRoutingModule
  ]
})
export class PixelsModule { }
