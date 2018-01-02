import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

/* import service */
import { TaskService } from "./task.service";

/* import routes */
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

/* import components */
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TaskComponent } from './task/task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

/* import firebase e config */
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TaskListComponent } from './task-list/task-list.component';


/* config this routes the app */
const appRoutes:Routes = [
  {path: 'task', component: TaskComponent},
  {path: 'edit', component: TaskEditComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskComponent,
    TaskEditComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { AppComponent } from './app.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FooterDefaultComponent } from './footer-default/footer-default.component';
import { ListGalleryComponent } from './list-gallery/list-gallery.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const appRoutes:Routes = [
  {path: 'home', component: ListGalleryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', component: SignUpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    FooterDefaultComponent,
    ListGalleryComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

*/