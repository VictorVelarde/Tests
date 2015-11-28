/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ChildComponent} from 'child';

@Component({
	selector: 'parent'
})

@View({
	template: `
		<h1>{{ message }}</h1>
		<child></child>
	`,
	directives: [ChildComponent]
})

class ParentComponent{
	message: string;
	constructor(){
		this.message = "Luke, soy tu parent";
	}
}

bootstrap(ParentComponent);