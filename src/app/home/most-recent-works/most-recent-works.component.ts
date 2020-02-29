import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-most-recent-works',
  templateUrl: './most-recent-works.component.html',
  styleUrls: ['./most-recent-works.component.scss']
})
export class MostRecentWorksComponent implements OnInit {

  @Input() projects: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
