import {
	Component,
	OnInit
} from '@angular/core';

import {
	BusService
} from "./app.component.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	busSchedules;


	constructor(private busServices: BusService) {
		this.busSchedules = null;
	}


	ngOnInit() {
		this.busServices.getBusSchedules().subscribe(p => this.busSchedules = p);
	}
}