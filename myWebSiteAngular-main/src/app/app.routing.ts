import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/Project/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
    {path: '', component: AboutComponent },
    {path: 'sobre-mi', component: AboutComponent },
    {path: 'proyectos', component: ProjectsComponent },
    {path: 'crear-proyecto', component: CreateComponent },
    {path: 'contacto',component: ContactComponent }
];

export const appRoutingProviders: any[]=[]; 
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);