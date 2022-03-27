import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {SpinnerStateModel} from "../model/spinner-state.model";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerState: SpinnerStateModel = new SpinnerStateModel(false);
  spinnerStateSubject: BehaviorSubject<SpinnerStateModel> = new BehaviorSubject<SpinnerStateModel>(this.spinnerState);

  constructor() {

  }

  enableSpinner() {
    this.spinnerState.isEnabled = true;
    this.spinnerStateSubject.next(this.spinnerState);
  }

  disableSpinner() {
    this.spinnerState.isEnabled = false;
    this.spinnerStateSubject.next(this.spinnerState);
  }

  stateSubscription(): Observable<SpinnerStateModel> {
    return this.spinnerStateSubject.asObservable();
  }
}
