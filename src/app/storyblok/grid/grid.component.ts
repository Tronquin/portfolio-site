import { Component, OnInit, Input } from '@angular/core';
import { Components } from 'src/app/components';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  components: any = import("src/app/components").then(cp => cp.Components);

  @Input() columns: any[];
  @Input() _editable: any;

  constructor() {
    this.components.then(obj => {this.components = obj});
  }

  ngOnInit(): void {
  }

}
