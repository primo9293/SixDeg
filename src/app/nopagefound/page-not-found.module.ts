import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { NopagefoundComponent } from './components/nopagefound.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    AuthModule
  ]
})
export class PageNotFoundModule {

}
