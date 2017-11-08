import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { MessageDetailComponent} from './message-detail.component';
import { MessageService } from './message.service';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
