import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFinanceResume } from 'src/app/models/finance-resume';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-finance-resume',
  templateUrl: './finance-resume.component.html',
  styleUrls: ['./finance-resume.component.scss'],
})
export class FinanceResumeComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['month', 'value'];
  public financeResume: IFinanceResume[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private _financeService: FinanceService) {}

  ngOnInit(): void {
    this.subscription.add(this._financeService.financeResume$.subscribe((finances) => {
      console.log(finances);
      this.financeResume = finances;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
