import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeTravellerComponent } from './home-traveller/home-traveller.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';


import { DialogDataExampleDialog } from "./post-request/post-request.component";
import { PostRequestTravelDialog } from "./post-request-travel/post-request-travel.component";
import { PostRequestCountryLiveDialog, PostRequestStateLiveDialog } from "./post-request-live/post-request-live.component";
import { PostRequestBudgetDialog } from "./post-request-budget/post-request-budget.component";

import { MaterialModuleLoad } from '../app/MatcomponentsLoad';
import { PostRequestTravelComponent } from './post-request-travel/post-request-travel.component';
import { PostRequestLiveComponent } from './post-request-live/post-request-live.component';
import { PostRequestBudgetComponent } from './post-request-budget/post-request-budget.component';
import { LoginComponent, LoginDialog } from './login/login.component';
import { SignupComponent, SignupDialog } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'homeTraveller',
    component: HomeTravellerComponent
  },
  // {
  //   path: 'postRequest',
  //   component: PostRequestComponent
  // },
  {
    path: 'postRequestTravel',
    component: PostRequestTravelComponent
  },
  {
    path: 'postRequestLive',
    component: PostRequestLiveComponent
  },
  {
    path: 'postRequestBudget',
    component: PostRequestBudgetComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { 
  // path: '**', 
  // component: PageNotFoundComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeTravellerComponent,
    PostRequestComponent,
    DialogDataExampleDialog,
    PostRequestTravelDialog,
    PostRequestStateLiveDialog,
    PostRequestCountryLiveDialog,
    PostRequestBudgetDialog,
    PostRequestTravelComponent,
    PostRequestLiveComponent,
    PostRequestBudgetComponent,
    LoginComponent,
    LoginDialog,
    SignupComponent,
    SignupDialog

  ],
  imports: [
    ReactiveFormsModule,
    MaterialModuleLoad,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    DialogDataExampleDialog,
    PostRequestTravelDialog,
    PostRequestStateLiveDialog,
    PostRequestCountryLiveDialog,
    PostRequestBudgetDialog,
    LoginDialog,
    SignupDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
