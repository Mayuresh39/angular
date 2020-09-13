import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public user:any;

  constructor(private userService:UserService,private toastr:ToastrService){

  }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData = () => {
    this.userService.getUser().subscribe(
      (user:any) => {
        this.user = user.results[0];
        console.log(user.results[0]);
      },
      (error)=>{
        this.toastr.error(error.status,"Oops! Api Failed");
      },
    );
  }

  public reload = () =>{
    this.getUserData();
  }
  
}
