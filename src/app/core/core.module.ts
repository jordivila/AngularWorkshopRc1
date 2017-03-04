import { LayoutModule } from './components/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [],
  exports: [LayoutModule]
})
export class CoreModule { }
