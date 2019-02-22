import { Component } from '@angular/core';
import * as Sentry from "@sentry/browser";

@Component({
    selector: 'app-error-click',
    template: `<button (click)="onClickError()">Click me!</button>`
})
export class ClickMeComponent {
    constructor() { }
    onClickError() {
        //Send an error to sentry on click!
        try {
            throw new Error("you clicked a button!");
        } catch (e) {
            Sentry.captureException(e);
        }
    }
}
