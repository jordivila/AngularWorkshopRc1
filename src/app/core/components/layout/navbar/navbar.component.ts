import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public items: any[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {

    this._router.config.forEach((routerItem) => {
      if (routerItem.data) {
        this.items.push({
          title: routerItem.data['title'],
          icon: routerItem.data['icon'],
          action: routerItem.path,
        });
      }
    });
  }

}
