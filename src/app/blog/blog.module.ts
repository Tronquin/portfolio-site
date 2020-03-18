import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
import { BlogListComponent } from "./list/list.component";
import { StoryBlokModule } from "../storyblok/storyblok.module";
import { SharedModule } from "../shared/shared.module";
import { BasicComponent } from "./basic/basic.component";

@NgModule({
  declarations: [BlogComponent, BlogListComponent, BasicComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
    SharedModule,
    StoryBlokModule
  ]
})
export class BlogModule {}
