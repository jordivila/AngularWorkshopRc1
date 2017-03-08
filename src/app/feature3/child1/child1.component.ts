import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  color: string;
  colors: string[];

  constructor() {
    this.colors = ['red', 'blue', 'yellow', 'black', 'pink'];
    this.color = this.colors[0];
  }

  ngOnInit() {
    setInterval(() => { this.nextColor(); }, 1000);
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
