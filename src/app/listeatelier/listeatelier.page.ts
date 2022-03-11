import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';

@Component({
  selector: 'app-listeatelier',
  templateUrl: './listeatelier.page.html',
  styleUrls: ['./listeatelier.page.scss'],
})
export class ListeatelierPage implements OnInit {
  item2:any;
  ListeAtelier:any;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private http : HttpClient) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item2 = this.router.getCurrentNavigation().extras.state.param2;
        console.log(this.item2)
       this.http.get("http://localhost:8000/api/listeAtelier/"+this.item2.idhackathon)
        .subscribe(results => {
          this.ListeAtelier = results;
          console.log(results)
        });
      }
    });
  }

  makeDate(tdate){
    console.log(tdate);
    let dt = new Date(tdate).toLocaleDateString("en-GB")
    let hr = new Date(tdate);
    var minutes = hr.getMinutes() <10 ? "0"+hr.getMinutes() : hr.getMinutes();
    var hour = hr.getHours() <10 ? "0"+hr.getHours() : hr.getHours();
    return dt+" à "+hour+":"+minutes;
  }

  ngOnInit() {
  }

  MonClick(item3){

    let navigationExtras: NavigationExtras = {
    state : {
    param3: item3
    }
    }
    this.router.navigate(['/detailatelier'], navigationExtras)
  }
}
