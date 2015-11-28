/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
	selector: 'display'
})

@View({
	templateUrl: 'todo-list.html',
	directives: [For, If]
})

class TodoList{
	todos: Array<string>;
	constructor(){
		this.todos = ["Desayuno", "Gatos", "Ducha"];
	}
	addTodo(todo: string){
		this.todos.push(todo);
	}
	doneTyping($event){
		console.log($event);
		if($event.which === 13){
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	}
}

bootstrap(TodoList);