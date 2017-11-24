import { Injectable, NgModule } from "@angular/core";
// import { NgModule } from '@angular/core';

export const GlobalVariable = Object.create({  
  BASE_API_URL: 'http://34.208.26.56:8080/nocknock/',
  isLogin : false,
  authToken : localStorage.getItem('authToken'),
  authTokenClient : localStorage.getItem('authTokenClient'),
  loginInvestorId : localStorage.getItem('loginInvestorId'),
  loginInvestorName : localStorage.getItem('loginInvestorName'),
  userRole : localStorage.getItem('userRole')
  //... more of your variables
});

@NgModule({
  providers: [
    Globals
  ]
})

@Injectable()
export class Globals {
  // isLogin = 'false';
  // authToken = '';
}

