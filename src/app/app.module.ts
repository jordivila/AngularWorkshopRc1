import { AppStoreService } from './app-store.service';
import { CoreModule } from './core/core.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NotFoundModule,
    CoreModule.forRoot()
  ],
  providers: [
    AppStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
