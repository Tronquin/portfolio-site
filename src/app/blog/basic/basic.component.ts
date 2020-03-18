import { Component, OnInit, Input } from "@angular/core";
import { StoryBlokService } from "../../storyblok/storyblok.service";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"]
})
export class BasicComponent implements OnInit {
  @Input() richText: any;
  body: string;

  constructor(private storyBlokService: StoryBlokService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.body = this.storyBlokService.parseRichText(this.richText);
  }
}
