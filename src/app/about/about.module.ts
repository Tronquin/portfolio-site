import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { WhatILikeComponent } from './what-i-like/what-i-like.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { StoryBlokModule } from '../storyblok/storyblok.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutComponent, WhoAmIComponent, WhatILikeComponent, ContactMeComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule, StoryBlokModule
  ]
})
export class AboutModule { }
