import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { HelloComponent } from './hello/hello.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { StoryBlokModule } from '../storyblok/storyblok.module';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MostRecentWorksComponent } from './most-recent-works/most-recent-works.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [HomeComponent, HelloComponent, WhatIDoComponent, MySkillsComponent, MostRecentWorksComponent, MyServicesComponent, FaqComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, StoryBlokModule]
})
export class HomeModule {}
