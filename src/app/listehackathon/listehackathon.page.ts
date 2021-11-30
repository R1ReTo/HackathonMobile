import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';

@Component({
  selector: 'app-listehackathon',
  templateUrl: './listehackathon.page.html',
  styleUrls: ['./listehackathon.page.scss'],
})
export class ListehackathonPage {

  ListHackathon: any;
  ListHackathonAff: any;
  listville = [];

  constructor(private http: HttpClient, private router: Router) {
    console.log("ici")
    this.http.get("http://localhost:8000/getHackathon")
      .subscribe(results => {
        var tmp: any = [];
        tmp = results;
        this.ListHackathon = results;
        this.ListHackathonAff = results;
        tmp.forEach(element => {
          this.listville.push(element.ville);

        })


        console.log(this.listville);
        var lstv = this.listville;
        this.listville = lstv.filter(function (ele, pos) {
          return lstv.indexOf(ele) == pos;

        })
      })
  }


  onChange(e) {
    console.log(e.target.value);
    this.ListHackathonAff = []
    this.ListHackathon.forEach(element => {
      if (element.ville == e.target.value) this.ListHackathonAff.push(element);
    });
  }

  MonClick(item) {

    let navigationExtras: NavigationExtras = {
      state: {
        param1: item
      }
    }
    this.router.navigate(['/details'], navigationExtras)
  }
}