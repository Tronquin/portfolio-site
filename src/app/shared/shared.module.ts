import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {
  FontAwesomeModule,
  FaIconLibrary,
  FaConfig
} from '@fortawesome/angular-fontawesome';
import {
  faBan, faLink
} from '@fortawesome/free-solid-svg-icons';

import {
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [HeaderComponent],
  imports: [FontAwesomeModule, RouterModule],
  exports: [FontAwesomeModule, RouterModule, HeaderComponent]
})
export class SharedModule {
  constructor(library: FaIconLibrary, config: FaConfig) {
    config.fallbackIcon = faBan;
    library.addIcons(
      faInstagram, faGithub, faLinkedin
    );
  }
}
