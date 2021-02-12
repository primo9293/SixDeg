import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
      { 
        path: 'admin', 
        component: AdminComponent
      },
      { 
        path: 'catalogo', 
        component: CatalogoComponent
      },
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
