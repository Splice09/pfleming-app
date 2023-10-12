import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  routeSubscription: any;
  filePath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filePath = "../../../../../assets/markdown/learning-home.md";
    this.routeSubscription = this.route.data.subscribe(routeData => {
      if (routeData.filePath !== undefined) {
        this.filePath = routeData.filePath;
      }
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
