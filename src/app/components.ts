import { PageComponent } from "./storyblok/page/page.component";
import { GridComponent } from "./storyblok/grid/grid.component";
import { HomeComponent } from "./home/home.component";
import { HelloComponent } from "./home/hello/hello.component";
import { WhoAmIComponent } from "./about/who-am-i/who-am-i.component";
import { AboutComponent } from "./about/about.component";
import { WhatIDoComponent } from "./home/what-i-do/what-i-do.component";
import { MySkillsComponent } from "./home/my-skills/my-skills.component";
import { MostRecentWorksComponent } from "./home/most-recent-works/most-recent-works.component";
import { MyServicesComponent } from "./home/my-services/my-services.component";
import { FaqComponent } from "./home/faq/faq.component";
import { WhatILikeComponent } from "./about/what-i-like/what-i-like.component";
import { ContactMeComponent } from "./about/contact-me/contact-me.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogListComponent } from "./blog/list/list.component";
import { BasicComponent } from "./blog/basic/basic.component";

let Components = {
  hello: HelloComponent,
  what_I_do: WhatIDoComponent,
  who_am_I: WhoAmIComponent,
  what_I_like: WhatILikeComponent,
  contact_me: ContactMeComponent,
  my_skills: MySkillsComponent,
  most_recent_works: MostRecentWorksComponent,
  my_services: MyServicesComponent,
  blog_list: BlogListComponent,
  basic: BasicComponent,
  faq: FaqComponent,
  about: AboutComponent,
  blog: BlogComponent,
  home: HomeComponent,
  page: PageComponent,
  grid: GridComponent
};

export { Components };
