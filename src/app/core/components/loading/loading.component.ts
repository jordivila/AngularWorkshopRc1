import { AppStoreService } from './../../../app-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public text: string;
  public isOpen: boolean;

  constructor(private _appStore: AppStoreService) {
    this._appStore.subscribe(() => {
      this.text = this._appStore.getState().LoadingStore.loadingText;
      this.isOpen = this._appStore.getState().LoadingStore.loadingIsOpen;
    });
  }

  ngOnInit() { }

}
