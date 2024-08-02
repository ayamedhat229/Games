import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [{ path: '', component: GamesComponent,children:[ 
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
  { path: 'shooter', loadChildren: () => import('./modules/shooter/shooter.module').then(m => m.ShooterModule) },
  { path: 'superhero', loadChildren: () => import('./modules/superhero/superhero.module').then(m => m.SuperheroModule) },
  { path: 'pixels', loadChildren: () => import('./modules/pixels/pixels.module').then(m => m.PixelsModule) }]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
