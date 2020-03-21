import { Injectable } from "@angular/core";
import Client from "storyblok-js-client";
import { from, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StoryBlokService {
  base: string = "https://api.storyblok.com/v1/cdn/stories/";
  extra: string = "?version=draft&token=tGJfV5v2KUknWNdP8LQR8Qtt";
  private sbClient = new Client({
    accessToken: "tGJfV5v2KUknWNdP8LQR8Qtt",
    https: true,
    cache: {
      clear: "auto",
      type: "memory"
    }
  });

  constructor(private http: HttpClient) {}

  getStory(slug: string, params?: object): Observable<any> {
    return this.http.get(this.base + slug + this.extra, params);
  }

  // getStory(slug: string, params?: object): Observable<any> {
  //   return from(this.sbClient.getStory(slug, params));
  // }

  getStories(params?: object): Observable<any> {
    return from(this.sbClient.getStories(params));
  }

  parseRichText(rtf: any): any {
    return this.sbClient.richTextResolver.render(rtf);
  }
}
