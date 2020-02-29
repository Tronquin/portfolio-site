import { Component, OnInit } from "@angular/core";
import { StoryBlokService } from '../storyblok/storyblok.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  story: any = { content: null, name: "" };
  components: any = import("src/app/components").then(cp => cp.Components);

  constructor(private storyblokService: StoryBlokService) {
    this.components.then(obj => {this.components = obj});
    window.storyblok.init();
    window.storyblok.on(["change", "published"], function() {
      location.reload(true);
    });
  }

  ngOnInit() {
    this.storyblokService
      .getStory("home", { version: "draft" })
      .subscribe(data => {
        console.log(data.data.story);
        this.story = data.data.story;
      });
  }
}
