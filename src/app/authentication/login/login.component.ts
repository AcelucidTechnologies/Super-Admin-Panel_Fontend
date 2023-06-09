import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() forget = new EventEmitter()

  form: FormGroup;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  showPassword:boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticationService : AuthenticationService,
    private router: Router,
    private toastr: ToastrMsgService
  ) {
    this.form = this.fb.group({
			email: ['', [Validators.required,Validators.email]],
			password: ['', [Validators.required]],
		});
    const test = localStorage.getItem('email')
    console.log("test" + test)
   }
   getdata(){
     this.forget.emit()
   }

   onSubmit () {
		const { email, password } = this.form.value;
		this.authenticationService.login({
            email: email,
            password: password
        }).subscribe(res => {
          console.log(res)
          if(res.errors){
            this.router.navigateByUrl("/login");
            this.toastr.showError("Login failed", "Login");
          }
          else{
            localStorage.setItem('UserData', res.username);
            localStorage.setItem('token', res.token);
            localStorage.setItem('role', res.role);
            localStorage.setItem('email', res.email);
            this.router.navigateByUrl("/dashboard");
            // console.log(res.body.data)
            // localStorage.setItem('UserData', res.username);
            let email = localStorage.getItem('email');
            this.toastr.showSuccess("Login Success", "Login");
          }
        });
	}



  ngOnInit(): void {
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
}
