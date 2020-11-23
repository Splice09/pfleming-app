import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  routeSubscription: any;
  filePath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filePath = "../../../assets/markdown/learning-home.md";
    this.routeSubscription = this.route.data.subscribe(routeData => {
      if (routeData.filePath !== undefined) {
        console.log(routeData.filePath);
        this.filePath = routeData.filePath;
      }
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
