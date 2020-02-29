import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {
  FontAwesomeModule,
  FaIconLibrary,
  FaConfig
} from '@fortawesome/angular-fontawesome';
import {
  faBan, faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [FontAwesomeModule, RouterModule],
  exports: [FontAwesomeModule, RouterModule, HeaderComponent, FooterComponent],
  providers: []
})
export class SharedModule {
  constructor(library: FaIconLibrary, config: FaConfig) {
    config.fallbackIcon = faBan;
    library.addIcons(
      faInstagram, faGithub, faLinkedin, faChevronDown, faChevronUp
    );
  }
}
