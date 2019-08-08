import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareProjectService {
  private readonly _project$ = new BehaviorSubject<any>('');

  constructor() { }

  public get project$() {
    return this._project$.asObservable();
  }

  public set project$(project: any) {
    this._project$.next(project);
  }
}
