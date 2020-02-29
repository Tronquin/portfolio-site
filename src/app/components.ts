import { PageComponent } from "./storyblok/page/page.component";
import { GridComponent } from "./storyblok/grid/grid.component";
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './home/hello/hello.component';
import { WhoAmIComponent } from './about/who-am-i/who-am-i.component';
import { AboutComponent } from './about/about.component';
import { WhatIDoComponent } from './home/what-i-do/what-i-do.component';
import { MySkillsComponent } from './home/my-skills/my-skills.component';
import { MostRecentWorksComponent } from './home/most-recent-works/most-recent-works.component';
import { MyServicesComponent } from './home/my-services/my-services.component';
import { FaqComponent } from './home/faq/faq.component';

let Components = {
  'hello': HelloComponent,
  'what_I_do': WhatIDoComponent,
  'who_am_I': WhoAmIComponent,
  'my_skills': MySkillsComponent,
  'most_recent_works': MostRecentWorksComponent,
  'my_services': MyServicesComponent,
  'faq': FaqComponent,
  'about': AboutComponent,
  'home': HomeComponent,
  'page': PageComponent,
  'grid': GridComponent,
};

export { Components };
