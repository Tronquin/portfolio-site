import { Component, OnInit} from '@angular/core';
import { Components } from './components'
import { StoryBlokService } from './storyblok/storyblok.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  story = { content: null, name: '' };
  components = Components;

  constructor(private storyblokService: StoryBlokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'], function () {
      location.reload(true)
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', { version: 'draft' })
      .subscribe(data => {
        this.story = data.data.story
      });
  }
}
