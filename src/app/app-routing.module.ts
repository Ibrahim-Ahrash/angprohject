import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    // loadChildren: () => import("./auth/login/auth.module").then(m => m.AuthModule)
    loadChildren: () => import("./auth3/auth3.module").then(m => m.Auth3Module)
  },
  {
    path: 'home',
    loadChildren: () => import("./home2/home2.module").then(m => m.Home2Module), canActivate: [AuthGuard]
  },
  {
    path: 'error',
    loadChildren: () => import("./error/error.module").then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
