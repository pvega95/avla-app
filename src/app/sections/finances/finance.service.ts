import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movement } from 'src/app/models/movement';
import { MOVEMENTS_MOCK } from 'src/app/const/movement.const';
import { onlyUnique } from 'src/app/utils/unique';
import { getGroupBy } from 'src/app/utils/group-by';
import { METRIC_CONST, METRIC_METHODS } from 'src/app/const/metric.const';
import { IFinanceResume } from 'src/app/models/finance-resume';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  private _financeResume: BehaviorSubject<IFinanceResume[]> = new BehaviorSubject<
    IFinanceResume[]
  >([]);
  private _families: BehaviorSubject<String[]> = new BehaviorSubject<String[]>(
    []
  );
  constructor(private _http: HttpClient) {
    this.getUniqueFamilies();
  }

  /**
   * Getter for movements
   */
  get financeResume$(): Observable<IFinanceResume[]> {
    return this._financeResume.asObservable();
  }

  /**
   * Getter for families
   */
  get families$(): Observable<String[]> {
    return this._families.asObservable();
  }

  setfinanceResume(value: IFinanceResume[]) {
    this._financeResume.next(value);
  }

  getUniqueFamilies(): void {
    const families = MOVEMENTS_MOCK.map((m) => new Movement(m)).map(
      (m) => m.family
    );
    const unique = families.filter((v, i, a) => a.indexOf(v) === i);
    this._families.next(unique);
  }

  calculateFinances(family: String, metric: String, year: String) {
    const filter_family = MOVEMENTS_MOCK.map((m) => new Movement(m)).filter(
      (mov) => mov.family == family && new Date(mov.date).getFullYear().toString() == year
    );
    const movements_ByYear = getGroupBy(filter_family);
    const result = this.getByMonth(movements_ByYear, metric);
    this._financeResume.next(result);
  }

  getByMonth(movements: any, metric:any ) {
    console.log('movements', movements);
    let movementTransformed = [];
    for (const prop in movements) {
      let data = { month: METRIC_CONST[prop]?.description , value: METRIC_METHODS[metric]?.fn(movements[prop]) };
      movementTransformed.push(data);
    }
    return movementTransformed
  }
}
