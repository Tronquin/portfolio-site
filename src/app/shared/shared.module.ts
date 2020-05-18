import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import {
  FontAwesomeModule,
  FaIconLibrary,
  FaConfig,
} from "@fortawesome/angular-fontawesome";
import {
  faBan,
  faChevronDown,
  faChevronUp,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FooterComponent } from "./footer/footer.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { CommonModule } from "@angular/common";
import { LoaderService } from "./services/loader.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./interceptors/loader.interceptor";
import { SbConvertImage } from "./pipe/SbConvertImage.pipe";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SbConvertImage,
  ],
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  exports: [
    FontAwesomeModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    SbConvertImage,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary, config: FaConfig) {
    config.fallbackIcon = faBan;
    library.addIcons(
      faInstagram,
      faGithub,
      faLinkedin,
      faChevronDown,
      faChevronUp,
      faEnvelopeSquare
    );
  }
}
