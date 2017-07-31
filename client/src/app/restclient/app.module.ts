import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

// import needed PrimeNG modules here
import {MessagesModule} from 'primeng/components/messages/messages';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { InputValidationModule } from './shared/form/inputvalidation.module';
import {routes} from './app-routing.module';


import { AppComponent } from './app.component';
import {MessageComponent} from './shared/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    HttpModule,
    MessagesModule,
    InputTextModule,
    ButtonModule,
    InputValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
