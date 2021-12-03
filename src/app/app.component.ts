import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: 'accueil', icon: 'home' },
    { title: 'Liste des hackathons', url: 'listehackathon', icon: 'list' },
    { title: 'Connexion', url: 'login', icon: 'person' },
  ];
}
