import { NgModule } from "@angular/core";
import { PageComponent } from "./page/page.component";
import { GridComponent } from "./grid/grid.component";
import { StoryBlokService } from "./storyblok.service";
import { StoryblokDirective } from "./storyblok.directive";
import { DynamicModule } from "ng-dynamic-component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    StoryblokDirective,
    PageComponent,
    GridComponent,
  ],
  imports: [DynamicModule, CommonModule],
  exports: [
    StoryblokDirective,
    PageComponent,
    GridComponent,
    DynamicModule
  ],
  providers: [StoryBlokService]
})
export class StoryBlokModule {
  constructor() {}
}
