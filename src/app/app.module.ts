import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UsersService } from "./services/users.service";
import { AuthService } from "./services/auth.service";
import { SystemModule } from "./system/system.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material";
import { TaskService } from "./services/task.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    SystemModule,
    BrowserAnimationsModule

  ],
  providers: [UsersService, AuthService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
