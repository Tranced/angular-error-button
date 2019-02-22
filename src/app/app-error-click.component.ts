import { Component } from '@angular/core';
import * as Sentry from "@sentry/browser";

@Component({
    selector: 'app-error-click',
    template: `<button (click)="onClickError()">Click me!</button>`
})
export class ClickMeComponent {
    constructor() { }
    onClickError() {
        try {
            throw new Error("you clicked a button!");
        } catch (e) {
            //Send an error to sentry on click
            Sentry.captureException(e);
        }
    }
}
