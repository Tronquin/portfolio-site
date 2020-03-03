import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-i-like',
  templateUrl: './what-i-like.component.html',
  styleUrls: ['./what-i-like.component.scss']
})
export class WhatILikeComponent implements OnInit {

  @Input() tribilin: any;
  @Input() music: string;
  @Input() cinema: string;
  @Input() videogames: string;
  @Input() image: any;


  constructor() { }

  ngOnInit(): void {
  }

}
