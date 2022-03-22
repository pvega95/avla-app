import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';

export const ROUTES: Routes = [
    {
      path: '',
      component: FinanceComponent,
    },
    {
      path: '**',
      redirectTo: '/404',
    },
  ];
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
    providers: [],
  })
  export class FinanceRoutingModule {}