import { Component } from '@angular/core';
import { Navigation } from '../models/navigation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pfleming-app';
  navigation: Navigation;

  ngOnInit() {
    this.navigation = {
      home: "HOME",
      writing: "WRITING",
      learning: "LEARNING"
    };
  }
}
