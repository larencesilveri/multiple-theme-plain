import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeThem = new BehaviorSubject('oceanBlueThemProps');

  constructor() { }
  // tslint:disable-next-line:typedef
  public getActiveTheme() {
    return this.activeThem.asObservable();
  }

  // tslint:disable-next-line:typedef
  public setActiveThem(name: string) {
    this.activeThem.next(name);
  }
}
