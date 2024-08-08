import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShooterRoutingModule } from './shooter-routing.module';
import { ShooterComponent } from './shooter.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ShooterComponent
  ],
  imports: [
    CommonModule,
    ShooterRoutingModule,
    SharedModule
  ]
})
export class ShooterModule { }
