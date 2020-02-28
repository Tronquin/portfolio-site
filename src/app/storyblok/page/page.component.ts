import { Component, OnInit, Input } from "@angular/core";
import { Components } from "src/app/components";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"]
})
export class PageComponent implements OnInit {
  components: any = import("src/app/components").then(cp => cp.Components);

  @Input() body: any;
  @Input() _editable: any;

  constructor() {
    this.components.then(obj => {this.components = obj});
  }

  ngOnInit(): void {}
}
