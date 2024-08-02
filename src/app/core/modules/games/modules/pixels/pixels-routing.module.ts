import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PixelsComponent } from './pixels.component';
import { DetailsComponent } from '../../../shared/component/details/details.component';

const routes: Routes = [{ path: '', component: PixelsComponent },
  {path:'details/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixelsRoutingModule { }
