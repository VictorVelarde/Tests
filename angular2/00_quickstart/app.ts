/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hola {{ name }}</h1>'
})
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Víctor';
    }
}

bootstrap(MyAppComponent);