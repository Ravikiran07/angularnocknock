import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpModule, Http, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import { GlobalVariable } from '../global';


import { MaterialModuleLoad } from '../MatcomponentsLoad';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

declare var jquery: any;
declare var $: any;
import 'hammerjs/hammer';

@Component({
  selector: 'login-dialog',
  templateUrl: 'dialog-login-dialog.html',
})

export class LoginDialog {
  loginForm: any;
  signupForm: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private http: Http,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    if (!GlobalVariable.authToken) {
      this.router.navigate(['/login']);
    }

    this.loginForm = this.formBuilder.group({
      'name': ['', Validators.required],
      // 'email': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      // 'profile': ['', [Validators.required, Validators.minLength(10)]]
    });

    this.signupForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'mobile': ['', Validators.required],
      'password': ['', Validators.required],
      'cpassword': ['', Validators.required],
      // 'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  public isLogin = true;

  public otpScreen = false;

  public headers = new Headers({
    // 'Content-Type': 'application/json',
    // 'async': true,
    // 'processing': true,
    // 'crossDomain': true,
    // 'content': "application/json; charset=utf-8",
    // "content-type": "application/x-www-form-urlencoded",
    // credentials: true
    // 'xhrFields': { withCredentials: true },
    // "Authorization": "Bearer " + GlobalVariable.authToken


    "async": true,
    "crossDomain": true,
    // "url": "http://34.208.26.56:8080/nocknock/signIn",
    "method": "POST",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "c189e7c4-b020-a81d-4f63-aea9508a16b6"
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    // "data": form
  });


  signupUser() {
    // if (this.signupForm.dirty && this.signupForm.valid) {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    let data = {
      "email": this.signupForm.value.email,
      "password": this.signupForm.value.password,
      'phone': this.signupForm.value.mobile,

      // 'first_name': 'dd1',
      // 'email': 'manju@gmail.com',
      // 'password': 'manju',
      // 'phone': '8861610675',
      'signup_type': 'Custom',
      // social_media: 
      // "email": this.loginForm.value.name,
      // "password": this.loginForm.value.password
    };
    console.log(data)

    let options = {
      type: "POST",
      url: "http://localhost:8015/dashboard/signUp",
      body: JSON.stringify(data)
    };

    this.http.post(options.url, options.body, {
      headers: this.headers
    }).subscribe((data) => {
      console.log(data);
      this.otpScreen = true;
    }, (err) => {
      console.log(err);
    });
    // alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.password}`);
    // }
  }

  loginUser() {

    // if (this.loginForm.dirty && this.loginForm.valid) {
      // let headers = new Headers({ 'Content-Type': 'application/json' });

      // let data = {
      //   "email": this.loginForm.value.name,
      //   "password": this.loginForm.value.password
      // };

      // console.log(data);

      // let options = {
      //   type: "POST",
      //   url: GlobalVariable.BASE_API_URL + "signIn",
      //   body: data
      // };

      // this.http.post(options.url,options.body).subscribe((data) => {
      //     console.log(data);
      //     let oData = JSON.parse(data['_body']);
      //     // console.log(oData[0].status)
      //     alert(oData[0].status);
      //   }, (err) => {
      //     console.log(err);
      //   });
      // alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.password}`);
    // }

/////////////////////////////////////////
    // let formData: FormData = new FormData();
    // formData.append('email', this.loginForm.value.name);
    // formData.append('password', this.loginForm.value.password);
    // // "Authorization": "Bearer " + GlobalVariable.authToken,

    // let headers = new Headers({
    //   // 'async': true,
    //   // 'processing': true,
    //   // 'crossDomain': true,
    //   // 'xhrFields': { withCredentials: true },
    //   // "processData": false,
    //   // "contentType": false,
    //   "headers": {
    //     "cache-control": "no-cache",
    //     // "postman-token": "c189e7c4-b020-a81d-4f63-aea9508a16b6"
    //   },
    //   "data": formData
    //   // "mimeType": "multipart/form-data",
    // });

    // let options = new RequestOptions({ headers: headers });
    // console.log(formData);

    let options = {
      url: GlobalVariable.BASE_API_URL + "signIn",
      // body: JSON.stringify({})
    };
    // console.log(options);
    // console.log(formData);

    var form = new FormData();
    form.append("email", "Ramesh@pega.com");
    form.append("password", "changeme");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://34.208.26.56:8080/nocknock/signIn",
      "method": "POST",
      "headers": {
        "cache-control": "no-cache",
        // "postman-token": "9aa7ff20-37d7-1c29-1f09-f6053c2aacec"
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }
    
    this.http.post(settings.url, settings).subscribe(
      data => {
        console.log(data);
      }, error => {
        // console.log("1err...");
        console.log(error);
      })
  }

  verifyOtp() {
    var data = $('.otpScreen .otp-box').map(function () {
      return this.value;
    }).get().join('');

    console.log(data);

    let options = {
      type: "POST",
      url: GlobalVariable.BASE_API_URL + "verifyOTP",
      body: data
    };

    this.http.post(options.url, options.body).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

  next(el) {
    $(el).focus();
  }


  gotoSignup() {
    console.log("isLogin false");
    this.isLogin = false;
    this.otpScreen = false;
  }

  gotoLogin() {
    console.log("isLogin true");
    this.isLogin = true;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }


  ngAfterViewInit() {

  }

  ngOnInit() {

    setTimeout(() => {
      this.openDialog();
    }, 100);
  }

  public isLogin = true;

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: '80%',
      height: '80%'
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      this.router.navigate(['/postRequestBudget']);
    });
  }
  onStepEnter4() {
    this.scrollSetBlueBg();
  }

  scrollSetBlueBg() {
    setTimeout(() => {
      var $aLi = $("wizard-navigation-bar.vertical ul.steps-indicator li");
      // console.log($aLi);
      // console.log($aLi.filter("li.current"));
      // console.log($aLi.filter("li.current").prevAll());

      $aLi.filter("li.current").prevAll().css('background-color', '#5a7ded !important')
    }, 0);
  }

  gotoSignup() {
    this.isLogin = false;
  }

}


