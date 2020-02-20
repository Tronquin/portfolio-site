import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { HelloComponent } from './hello/hello.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { StoryBlokModule } from '../storyblok/storyblok.module';

@NgModule({
  declarations: [HomeComponent, HelloComponent, WhatIDoComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, StoryBlokModule]
})
export class HomeModule {}
