import { NgModule } from "@angular/core";
import { PageComponent } from "./page/page.component";
import { TeaserComponent } from "./teaser/teaser.component";
import { GridComponent } from "./grid/grid.component";
import { FeatureComponent } from "./feature/feature.component";
import { StoryBlokService } from "./storyblok.service";
import { StoryblokDirective } from "./storyblok.directive";
import { DynamicModule } from "ng-dynamic-component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    StoryblokDirective,
    PageComponent,
    TeaserComponent,
    GridComponent,
    FeatureComponent
  ],
  imports: [DynamicModule.forRoot(), CommonModule],
  exports: [
    StoryblokDirective,
    PageComponent,
    TeaserComponent,
    GridComponent,
    FeatureComponent,
    DynamicModule
  ],
  providers: [StoryBlokService]
})
export class StoryBlokModule {
  constructor() {}
}
