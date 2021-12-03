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
