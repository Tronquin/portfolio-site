import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class BlogListComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() blogs: IBlog[];

  ngOnInit(): void {}

  goToBlog(blog: IBlog, slug: string) {
    this.router.navigate([`blog/${slug}`], { replaceUrl: true });
  }
}

export interface IBlog {
  title: string;
  resume: string;
  timestamp: string;
  slug: string;
  body: any;
}
