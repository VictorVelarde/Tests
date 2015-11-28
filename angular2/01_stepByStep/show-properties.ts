/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';
 
class FriendsService {
	nombres: Array<string>;
	constructor(){
		this.nombres = ["A", "B", "C", "D"];
	}
}

@Component({
	selector: 'display',
	injectables: [FriendsService]
})

@View({
	template: `
		<p>Mi nombre es: {{miNombre}}</p>
		<p>Amigos: </p>
		<ul>
			<li *for="#nombre of nombres">
				{{nombre}}
			</li>
		</ul>
		<p *if="nombres.length > 3">¡Tope de amigos!</p>
		`,
	directives: [For, If]
})

class DisplayComponent{
	miNombre: string;
	nombres: Array<string>;
	constructor(friendsService: FriendsService){
		console.log('obj', friendsService);
		this.miNombre = "Víctoria";
		this.nombres = friendsService.nombres;		
	}
}

bootstrap(DisplayComponent);