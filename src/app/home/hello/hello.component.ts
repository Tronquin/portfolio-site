import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.scss"]
})
export class HelloComponent implements OnInit {
  @Input() headline: string;
  @Input() description: string;
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}
