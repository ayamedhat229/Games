import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from '../../interceptor/global.interceptor';


@NgModule({
  declarations: [
    GamesComponent,
    
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ],
  providers:[
   { provide:HTTP_INTERCEPTORS,
      useClass:GlobalInterceptor,
      multi:true}
  ]
})
export class GamesModule { }
