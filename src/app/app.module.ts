import { CoreModule } from './core/core.module';
import { NotFoundModule } from './not-found/not-found.module';
import { Feature2Module } from './feature2/feature2.module';
import { Feature1Module } from './feature1/feature1.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Feature1Module,
    Feature2Module,
    NotFoundModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
