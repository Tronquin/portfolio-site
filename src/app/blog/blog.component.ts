import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router, ROUTES } from "@angular/router";
import { StoryBlokService } from "../storyblok/storyblok.service";
import { take } from "rxjs/operators";

declare var ng: any;

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  story: any = { content: null, name: "" };
  components: any = import("src/app/components").then(cp => cp.Components);

  constructor(
    private router: Router,
    private storyblokService: StoryBlokService
  ) {
    this.components.then(obj => {
      this.components = obj;
    });
    window.storyblok.init();
    window.storyblok.on(["change", "published"], function() {
      location.reload(true);
    });
  }

  ngOnInit() {
    this.storyblokService
      .getStory(this.router.url, { version: "draft" })
      .pipe(take(1))
      .subscribe(data => {
        this.story = data.data.story;
      });
  }
}
