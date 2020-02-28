import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { SharedModule } from "./shared/shared.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { StoryBlokModule } from "./storyblok/storyblok.module";
import { DynamicModule } from 'ng-dynamic-component';
import { PageComponent } from './storyblok/page/page.component';
import { GridComponent } from './storyblok/grid/grid.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    SharedModule,
    DynamicModule.forRoot(),
    StoryBlokModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
