import { Component, OnInit } from "@angular/core";
import { SpinnerComponent } from "./shared/spinner/spinner.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public spinnerComponent = SpinnerComponent;
  constructor() {}
}
