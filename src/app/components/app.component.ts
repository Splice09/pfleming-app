import { Component } from '@angular/core';
import { Navigation } from '../models/navigation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfleming-app';
  navigation: Navigation;

  ngOnInit() {
    this.navigation = {
      home: "HOME",
      blog: "BLOG",
      learning: "LEARNING"
    };
  }
}
