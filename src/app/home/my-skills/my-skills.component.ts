import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  @Input() headline: string;
  @Input() description: string;
  @Input() portrait: any;
  @Input() chart: any;
  @Input() chart_mobile: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
