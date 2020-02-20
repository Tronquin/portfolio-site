import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ScullyRoutesService } from "@scullyio/ng-lib";
import { StoryBlokService } from '../storyblok/storyblok.service';
import { Components } from 'src/app/components';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  story = { content: null, name: "" };
  components = Components;

  constructor(private storyblokService: StoryBlokService) {
    window.storyblok.init();
    window.storyblok.on(["change", "published"], function() {
      location.reload(true);
    });
  }

  ngOnInit() {
    this.storyblokService
      .getStory("home", { version: "draft" })
      .subscribe(data => {
        console.log('home component', data.data.story);
        this.story = data.data.story;
      });
  }
}
