import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1-1',
  templateUrl: './child1-1.component.html',
  styleUrls: ['./child1-1.component.css']
})
export class Child11Component implements OnInit {

  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
