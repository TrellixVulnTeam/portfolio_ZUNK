import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';

import { ContactComponent } from './contact/contact.component'
import {MatCardModule} from '@angular/material/card';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SkillistComponent } from './skillist/skillist.component';
import { PfProjectComponent } from './pf-project/pf-project.component';
import { ProjectContentComponent } from './project-content/project-content.component';







@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    NavigationComponent,
    NavComponent,
    FooterComponent,
    SkillistComponent,
    PfProjectComponent,
    ProjectContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule, 
    MatGridListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
