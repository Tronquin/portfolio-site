import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';


@NgModule({
  declarations: [AboutComponent, WhoAmIComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
