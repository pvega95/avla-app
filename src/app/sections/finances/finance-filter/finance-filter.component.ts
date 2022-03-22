import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { METRICS_METHODS } from 'src/app/const/metric.const';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-finance-filter',
  templateUrl: './finance-filter.component.html',
  styleUrls: ['./finance-filter.component.scss'],
})
export class FinanceFilterComponent implements OnInit {
  public financeForm: FormGroup = new FormGroup({});
  public families: String[] = [];
  public metrics: String[] = METRICS_METHODS;
  constructor(
    private _financeService: FinanceService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this._financeService.families$.subscribe((families) => {
      this.families = families;
    });
  }

  createForm(): void {
    this.financeForm = this.fb.group({
      familyControl: new FormControl('', [Validators.required]),
      metricControl: new FormControl('', [Validators.required]),
      yearControl: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(form: FormGroup) {
    const { familyControl, metricControl, yearControl } = form.value;
    this._financeService.calculateFinances(familyControl, metricControl, yearControl);
  }

  clear() {
    this.financeForm.reset();
    this._financeService.setfinanceResume([]);
  }
}
