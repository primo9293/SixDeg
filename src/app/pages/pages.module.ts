import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
       HomeComponent,
       GaleriaComponent,
       ConfirmComponent,
       SearchComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    HomeComponent,
    GaleriaComponent,
    SearchComponent
  ]
})
export class PagesModule { }
