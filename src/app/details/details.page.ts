import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item="";

  constructor(private router: Router, 
              private activeRoute : ActivatedRoute) { 
      this.activeRoute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.item = 
          this.router.getCurrentNavigation().extras.state.param1;
      }
              });
            }

  ngOnInit() {
  }

}
