import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-who-am-i",
  templateUrl: "./who-am-i.component.html",
  styleUrls: ["./who-am-i.component.scss"],
})
export class WhoAmIComponent implements OnInit {
  @Input() first_name: string;
  @Input() last_name: string;
  @Input() catch: string;
  @Input() subline: string;
  @Input() brief: string;
  @Input() biography_1: string;
  @Input() biography_2: string;
  @Input() front: any;
  @Input() biography_image: any;

  constructor() {}

  ngOnInit(): void {}
}
