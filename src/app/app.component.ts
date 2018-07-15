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
	chevronToggle;
	
	

	constructor(private busServices: BusService) {
		this.busSchedules = null;
		this.chevronToggle = [0, 0];
	}

	public getRouteId(route: string) {
		return route.split(" ")[0];
	}
	
	public getAllButRouteId(route: string) {
		let r = " "+ route.split(" ").slice(1).join(" ");
		return r;
	}
	
	public getScheduleStatus(timeDiff: number) {
		if (timeDiff < 0) {
			return 'Late';
		} else if (timeDiff > 0) {
			return 'Early';
		} else {
			return 'On Time'
		}
	}
	
	public isUnknown(timeDiff: object) {
		return timeDiff === null;
	}
	
	public togglePanel(event, index) {
		console.log("togglePanel ", event.target);
		this.chevronToggle[index] = this.chevronToggle[index] ^ 1;
		return true;
	}
	
	public togglePanelGroup(event, index) {
		console.log("togglePanelGroup ", event.target);
		this.chevronToggle[index] = this.chevronToggle[index] ^ 1;
		return true;
	}

	ngOnInit() {
		this.busServices.getBusSchedules().subscribe(p => this.busSchedules = p);
	}
}