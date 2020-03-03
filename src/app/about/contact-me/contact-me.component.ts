import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  @Input() folks: string;
  @Input() farewell_1: string;
  @Input() farewell_2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
