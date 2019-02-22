import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './app-error-click.component';
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://7b31f5fabdf34faeaa5df5f4813858bc@sentry.io/1398002"
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(err: any): void {
    Sentry.captureException(err.originalError || err);
    throw err;
  }
}



@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
