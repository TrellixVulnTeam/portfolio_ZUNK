import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { SkillistComponent } from './skillist/skillist.component';
import { ProjectComponent } from './project/project.component';
import { PfProjectComponent } from './pf-project/pf-project.component';
import { ProjectContentComponent } from './project-content/project-content.component';

import { ContactComponent } from './contact/contact.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { ImageViewerModule } from '@nghacks/image-viewer';













@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillComponent,
    SkillistComponent,
    ProjectComponent,
    PfProjectComponent,
    ProjectContentComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
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
    ImageViewerModule
   
    


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
