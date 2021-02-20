import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactManagerAppComponent } from './contact-manager-app/contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: '', component: ContactManagerAppComponent, children: [
    { path: '', component: MainContentComponent }
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ContactManagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactManagerModule { }
