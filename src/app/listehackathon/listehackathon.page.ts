import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-listehackathon',
  templateUrl: './listehackathon.page.html',
  styleUrls: ['./listehackathon.page.scss'],
})
export class ListehackathonPage{

  ListHackathon:any;

constructor(private http:HttpClient, private router:Router) {
  
  this.http.get("http://localhost:8000/getHackathon")
    .subscribe(results =>{
      this.ListHackathon=results;
    });

    
  }

  MonClick(item){

    let navigationExtras: NavigationExtras = {
    state : {
    param1: item
    }
    }
    this.router.navigate(['/details'], navigationExtras)
  }
} 