import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    //initialize firebase when app starts
    firebase.initializeApp({
      apiKey: "AIzaSyAF8wXvsLLyqwVyf_EJcprB6Phe9PbAxT0",
      authDomain: "ng-recipe-book-6c119.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
