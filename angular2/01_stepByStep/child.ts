/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'child'
})

@View({
	template: `
		<p>{{ message }} </p>
	`
})

export class ChildComponent{
	message: string;
	constructor(){
		this.message = "Nop, no lo creo";
	}
}
