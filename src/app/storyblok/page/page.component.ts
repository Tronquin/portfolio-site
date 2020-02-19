import { Component, OnInit, Input } from "@angular/core";
import { Components } from "src/app/components";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"]
})
export class PageComponent implements OnInit {
  components = Components;

  @Input() body: any[];
  @Input() _editable: any;

  constructor() {}

  ngOnInit(): void {}
}
