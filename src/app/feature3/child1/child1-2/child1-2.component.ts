import { Component, OnInit, Input, OnChanges, SimpleChange, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child1-2',
  templateUrl: './child1-2.component.html',
  styleUrls: ['./child1-2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Child12Component implements OnInit, OnChanges {

  @Input() color: string;
  displayColor: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (this.color.charAt(0) === 'b') {
      this.displayColor = this.color;
    }
  }


}
