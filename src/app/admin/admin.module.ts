import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin/admin.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NavegacionComponent } from './navegacion/navegacion.component';



@NgModule({
  declarations: [
    AdminComponent,
    CatalogoComponent,
    NavegacionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent,
    AdminRoutingModule
  ]
})
export class AdminModule { }