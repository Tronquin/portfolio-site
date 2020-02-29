import { Injectable } from "@angular/core";
import Client from "storyblok-js-client";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StoryBlokService {
  private sbClient = new Client({
    accessToken: "tGJfV5v2KUknWNdP8LQR8Qtt",
    https: true
  });

  constructor() {}

  getStory(slug: string, params?: object): Observable<any> {
    return from(this.sbClient.getStory(slug, params));
  }

  getStories(params?: object): Observable<any> {
    return from(this.sbClient.getStories(params));
  }
}
