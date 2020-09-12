import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';
import { passwordChecker } from './custom-validators/password-checker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  
  constructor(private formBuilder:FormBuilder){
  }

  title = 'signup-reactive';
  public signUpForm: FormGroup;
  public isSubmitted : boolean =false;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      //first field is default value and not placeholders and then whatever validations we need
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTnC: [false, Validators.requiredTrue],
    },{
      validators : passwordChecker('password','confirmPassword')
    });
  }
  
  public onReset = () => {
    this.isSubmitted=false;
    this.signUpForm.reset();
  }

  public onSubmit = () => {
    this.isSubmitted = true;
    if(this.signUpForm.invalid){
      return;
    }
    console.table(this.signUpForm.value);
    console.table(this.signUpForm);
    alert("Success Registration\n"+JSON.stringify(this.signUpForm.value));
  }

  get controls(){
    return this.signUpForm.controls;
  }
  
}

