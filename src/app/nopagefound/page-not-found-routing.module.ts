import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NopagefoundComponent } from './components/nopagefound.component';


const routes: Routes = [
  {
    path: '',
    component: NopagefoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule {}
