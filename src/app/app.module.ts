import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IntroComponent } from './intro/intro.component';
import { BioComponent } from './bio/bio.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { NgwWowModule } from 'ngx-wow';
import { ExperienceComponent } from './experience/experience.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroComponent,
    BioComponent,
    TechStackComponent,
    ExperienceComponent,
    SocialMediaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
