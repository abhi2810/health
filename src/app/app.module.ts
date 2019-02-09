import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ScoreComponent } from './dashboard/score/score.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { DatadumpComponent } from './dashboard/datadump/datadump.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './dashboard/home/home.component';
import { ErrorComponent } from './common/error/error.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { SidenavListComponent } from './common/sidenav-list/sidenav-list.component';
import { CreateChannelComponent } from './authority/create-channel/create-channel.component';
import { ViewChannelComponent } from './authority/view-channel/view-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ScoreComponent,
    ProfileComponent,
    DatadumpComponent,
    HomeComponent,
    ErrorComponent,
    ToolbarComponent,
    SidenavListComponent,
    CreateChannelComponent,
    ViewChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
