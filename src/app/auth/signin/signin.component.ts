import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  public signinForm!: FormGroup

  constructor( private formBuilder: FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void{
    this.signinForm = this.formBuilder.group({
      email:[""],
      password:[""]
    })
  }

  signin(){
    this.http.get<any>("")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
      });
      if(user){
        alert("login Succefull");
        this.signinForm.reset();
        this.router.navigate(['home'])

      }else{
        alert("user not found");
      }
    },err=>{
      alert("Ooops! Something went wrong")
    })
   }

}
