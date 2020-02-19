import { Injectable } from "@angular/core";
import Client from 'storyblok-js-client';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoryBlokService {

  private sbClient = new Client({
    accessToken: '9PQ4Lz7xyLQIIsnuXsGgDgtt'
  });

  constructor() {

  }


  getStory(slug: string, params?: object): Observable<any> {
    return from(this.sbClient.getStory(slug, params))
  }

  getStories(params?: object): Observable<any> {
    return from(this.sbClient.getStories(params))
  }
}
