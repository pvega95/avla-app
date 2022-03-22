import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceFilterComponent } from './finance-filter/finance-filter.component';
import { FinanceResumeComponent } from './finance-resume/finance-resume.component';
import { FinanceComponent } from './finance.component';



@NgModule({
    declarations: [
        FinanceComponent,
        FinanceFilterComponent,
        FinanceResumeComponent
    ],
    imports: [CommonModule, SharedModule, FinanceRoutingModule],
  })
  export class FinanceModule {}
  