import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material/material.module';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { NoimagePipe } from './pipe/noimage.pipe';




@NgModule({
  declarations: [
  AppNavbarComponent,
  NoimagePipe
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    AppNavbarComponent,
    NoimagePipe
  ]
})
export class SharedModule { }