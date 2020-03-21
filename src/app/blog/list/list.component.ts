import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class BlogListComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() blogs: IBlog[];

  ngOnInit(): void {
    dayjs.extend(utc);
  }

  goToBlog(blog: IBlog, slug: string) {
    this.router.navigate([`blog/${slug}`], { replaceUrl: true });
  }

  processTimestamp(timestamp: string) {
    return dayjs.utc(timestamp).format("MMMM DD YYYY");
  }
}

export interface IBlog {
  title: string;
  resume: string;
  timestamp: string;
  slug: string;
  body: any;
}
