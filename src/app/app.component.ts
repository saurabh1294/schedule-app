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

/* This is the root AppComponent class */
export class AppComponent implements OnInit {
	title = 'app';
	busSchedules;
	chevronToggle;
	
	
	/* constructor of the component */
	constructor(private busServices: BusService) {
		this.busSchedules = null;
		this.chevronToggle = [];
	}

	/* extract and return route ID which is shown in bold */
	public getRouteId(route: string) {
		return route.split(" ")[0];
	}
	
	/* extract and return all but first 3 digits from the routeVariant attribute string */
	public getAllButRouteId(route: string) {
		let r = " "+ route.split(" ").slice(1).join(" ");
		return r;
	}
	
	/* resets all but the current open panel which closes previously open panels */
	private resetToggle(index) {
		let carr = this.chevronToggle;
		for (let i = 0; i < carr.length; i++) {
			if(i !== index) {
				carr[i] = 0;
			}
		}
	}
	
	/* Initializes chevronToggle array after receiving service response */
	private initChevron() {
		let busServices = this.busSchedules.data;
		for (let i = 0; i < busServices.length; i++) {
			this.chevronToggle.push(0);
		}
	}

	/* Returns bus timing status */
	public getScheduleStatus(timeDiff: number) {
		if (timeDiff < 0) {
			return 'Late';
		} else if (timeDiff > 0) {
			return 'Early';
		} else {
			return 'On Time'
		}
	}
	
	/* checks if bus time deviation status is unknown */
	public isUnknown(timeDiff: number) {
		return timeDiff === null;
	}
	
	/* toggles the bus info panel */
	public togglePanel(event, index) {
		this.chevronToggle[index] = this.chevronToggle[index] ^ 1;
		this.resetToggle(index);
	}
	
	/* default ngOnInit angular function */
	ngOnInit() {
		this.busServices.getBusSchedules().subscribe(p => {
			this.busSchedules = p;
			this.initChevron();
		});
	}
}