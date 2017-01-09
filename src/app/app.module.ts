import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DogComponent } from './+dog/dog.component';
import { MeComponent } from './+me/me.component';

const appRoutes: Routes = [
  {
    path: 'dogs',
    component: DogComponent
  },
  {
    path: 'account',
    component: MeComponent
  },
  {
    path: '**',
    redirectTo: '/dogs'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
