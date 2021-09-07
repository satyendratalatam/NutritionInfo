import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string ="";
  //public errorDialogRef: MatDialogRef<ErrorComponent>;

  constructor(private dialog: MatDialog,private router: Router) { }

  ngOnInit() {
  }
  login(){
    if(this.username === "demo" && this.password === "demo")
    {
      this.router.navigate(['home']);
    }
    else
    {

      this.dialog.open(ErrorComponent,{  data: {
        message: "Your login information are incorrect!"
      }});
    }
  }
}
