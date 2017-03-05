import { AppStoreService } from './app-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  isLoading: boolean;

  constructor(private appStore: AppStoreService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.appStore.subscribe(() => {
      this.isLoading = this.appStore.getState().LoadingStore.loadingIsOpen;
    });
  }

}
