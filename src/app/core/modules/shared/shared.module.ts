import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SharedComponent } from './component/shared/shared.component';
import { DetailsComponent } from './component/details/details.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    NavbarComponent,
    SharedComponent,
    DetailsComponent,
    SearchPipe,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton:true,
    })
  ],
  exports:[
    ToastrModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    NavbarComponent,
    SharedComponent,
    DetailsComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe
  ]
})
export class SharedModule { }
