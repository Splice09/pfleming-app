import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-how-its-made',
  templateUrl: './how-its-made.component.html',
  styleUrls: ['./how-its-made.component.scss']
})
export class HowItsMadeComponent implements OnInit {
  routeSubscription: any;
  filePath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filePath = "../../../../../assets/markdown/how-its-made.md";
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
