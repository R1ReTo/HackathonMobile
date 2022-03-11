import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  ListeAtelier:any;
  item = "";

  constructor(private router: Router,
    private activeRoute: ActivatedRoute, private http: HttpClient) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
          this.item =
          this.router.getCurrentNavigation().extras.state.param1;
      }
    });
   /* this.http.get("http://localhost:8000/api/listeAtelier")
      .subscribe(results => {
        this.ListeAtelier = results;
      });*/
  }

  ngOnInit() {
  }

  MonClick(item2){

    let navigationExtras: NavigationExtras = {
    state : {
    param2: item2
    }
    }
    this.router.navigate(['/listeatelier'], navigationExtras)
  }

  

}
