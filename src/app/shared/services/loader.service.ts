import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable()
export class LoaderService {
  public isLoading = new BehaviorSubject(false);

  constructor() {}

  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}
