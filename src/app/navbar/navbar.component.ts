import { CommonModule } from '@angular/common';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  logined:any
  constructor(private _DataService:DataService ,private _Router:Router){}
  mySavedCount:number=0
  ngOnInit(): void {
    this._DataService.savedCount$.subscribe((x)=>{
      this.mySavedCount=x
    })

  this._DataService.isLogined.subscribe((x)=>{
    this.logined=x
    console.log(this.logined)
  })
} 
logOut(){
  this._DataService.isLogined.next(false)
  this._Router.navigate(['/login'])
}
}
