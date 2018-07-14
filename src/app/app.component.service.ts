import {
	Injectable
} from '@angular/core';
import {
	HttpClient,
	HttpHeaders
} from '@angular/common/http';
import {
	BusInfo
} from "./app.models.businfo";
import {
	catchError
} from 'rxjs/operators';
import {
	Observable
} from 'rxjs';
import {
	HttpErrorHandler,
	HandleError
} from './app.component.handleError.service';

@Injectable()
export class BusService {
	baseUrl = 'http://localhost:4201';
	private handleError: HandleError;

	/* consturctor for busservice class */
	constructor(
		private http: HttpClient,
		httpErrorHandler: HttpErrorHandler) {
		this.handleError = httpErrorHandler.createHandleError('BusService');
	}

	/** GET buses info from the server */
	getBusSchedules(): Observable < BusInfo[] > {
		return this.http.get < BusInfo[] > (`${this.baseUrl}/api/getBusSchedules`)
			.pipe(
				catchError(this.handleError('getBusSchedules', []))
			);
	}
}