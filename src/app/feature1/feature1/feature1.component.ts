import { Serie } from './../../core/models/serie';
import { SeriesService } from './../../core/services/series/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {

  constructor(private seriesService: SeriesService) { }


  ngOnInit() {
    console.group('Http Request begin');
    console.log('Waiting show...');

    this.seriesService
      .get()
      .finally(() => {
        console.log('Waiting hide...');
        console.groupEnd();
      })
      .toPromise()
      .then((data: Serie[]) => {
        console.log(data);
      })
      .catch((error: any) => {
        console.log(`WTF ${error}`);
      });
  }

}
