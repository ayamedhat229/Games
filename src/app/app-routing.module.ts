import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/Guards/auth.guard';


const routes: Routes = [{path:"",redirectTo:'auth',pathMatch:"full"}
  ,{ path: 'auth',  loadChildren: () => import('./core/modules/auth/auth.module').then(m => m.AuthModule) },
   { path: 'games',canActivate:[AuthGuard], loadChildren: () => import('./core/modules/games/games.module').then(m => m.GamesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
