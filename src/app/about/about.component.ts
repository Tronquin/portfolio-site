import { Component, OnInit } from "@angular/core";
import { StoryBlokService } from "../storyblok/storyblok.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  story: any = { content: null, name: "" };
  components: any = import("src/app/components").then(cp => cp.Components);

  constructor(private storyblokService: StoryBlokService) {
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
      .getStory("about", { version: "draft" })
      .pipe(take(1))
      .subscribe(data => {
        this.story = data.story;
      });
  }
}
