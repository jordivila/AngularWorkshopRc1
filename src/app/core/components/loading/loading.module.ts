import { LoadingHelperService } from './loading-helper.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingReducerService } from './loading-reducer.service';
import { LoadingComponentActions } from './loading-actions';
import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  providers: [LoadingReducerService, LoadingComponentActions, LoadingHelperService]
})
export class LoadingModule { }
