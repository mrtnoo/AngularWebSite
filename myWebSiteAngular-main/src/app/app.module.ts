import { createComponent, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/Project/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent]
  
})
export class AppModule { }
