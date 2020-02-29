import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {

  @Input() services: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
