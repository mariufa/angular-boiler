import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
