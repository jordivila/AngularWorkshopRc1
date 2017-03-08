import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Feature3Component implements OnInit {

  color: string;
  colors: string[] = ['red', 'blue', 'yellow', 'black', 'pink'];

  constructor() { }

  ngOnInit() {
    this.nextColor();
  }

  nextColor() {

    const index = this.colors.indexOf(this.color);

    if (index >= 0 && index < this.colors.length - 1) {
      this.color = this.colors[index + 1];
    } else {
      this.color = this.colors[0];
    }

  }
}
