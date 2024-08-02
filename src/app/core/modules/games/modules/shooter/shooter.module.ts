import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShooterRoutingModule } from './shooter-routing.module';
import { ShooterComponent } from './shooter.component';


@NgModule({
  declarations: [
    ShooterComponent
  ],
  imports: [
    CommonModule,
    ShooterRoutingModule
  ]
})
export class ShooterModule { }
