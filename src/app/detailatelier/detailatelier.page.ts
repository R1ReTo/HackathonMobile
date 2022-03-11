import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailatelier',
  templateUrl: './detailatelier.page.html',
  styleUrls: ['./detailatelier.page.scss'],
})
export class DetailatelierPage implements OnInit {
  
  item3:any;
  DetailAtelier:any;


  constructor(private router: Router, private activeRoute: ActivatedRoute, private http :HttpClient) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item3 =
          this.router.getCurrentNavigation().extras.state.param3;
          
      }
    });
    
  }
  


ngOnInit() {


}
}
