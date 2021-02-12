import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { AdminRoutingModule } from './admin/admin.routing';
import { AdminguardGuard } from './guards/adminguard.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
    ]
  },
  {
    path: 'login',
    // canActivate: [AdminGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    // canActivate: [AdminguardGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./nopagefound/page-not-found.module').then(m => m.PageNotFoundModule)
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

