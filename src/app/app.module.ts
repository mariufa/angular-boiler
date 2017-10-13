import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { BasicDetailComponent } from './basic-detail.component';
import { BasicService } from './basic.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ BasicService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
