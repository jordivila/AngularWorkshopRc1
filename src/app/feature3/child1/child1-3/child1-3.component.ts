import { Component, OnInit, Input, OnChanges, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child1-3',
  templateUrl: './child1-3.component.html',
  styleUrls: ['./child1-3.component.css'],

})
export class Child13Component implements OnInit {

  @Input() color: string;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {

  }

  detach() {
    this.ref.detach();
    setInterval(() => {
      this.ref.reattach();
    }, 5000);
  }

}
