import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss']
})
export class WhatIDoComponent implements OnInit {

  @Input() headline: string;
  @Input() description: string;
  @Input() columns: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.columns);
  }

}
