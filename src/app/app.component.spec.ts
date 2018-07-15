import {
	TestBed,
	async,
	inject
} from '@angular/core/testing';
import {
	AppComponent
} from './app.component';
import {
	HttpClient,
	HttpClientModule,
	HttpHeaders
} from '@angular/common/http';
import {
	BusService
} from "./app.component.service";
import {
	HttpErrorHandler,
	HandleError
} from './app.component.handleError.service';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';

describe('AppComponent', () => {
	beforeEach(async (() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			providers: [
				BusService,
				HttpErrorHandler
			],
			imports: [
				// no more boilerplate code w/ custom providers needed :-)
				HttpClientModule,
				HttpClientTestingModule
			]
		}).compileComponents();
	}));

	// test spec for create angular APP
	it('should create the app', async (() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	// test spec for testing the app root
	it(`should have as title 'app'`, async (() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('app');
	}));

	// test spec for testing the app h1 tag header title
	it('should render title in a h1 tag', async (() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Bus reports');
	}));

	it(`should issue a request`,
		// 1. declare as async test since the HttpClient works with Observables
		async (
			// 2. inject HttpClient and HttpTestingController into the test
			inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
				// 3. send a simple request
				http.get('http://localhost:4201/api/getBusSchedules').subscribe((data) => {
					//expect(next).toEqual({ baz: '123' });
					console.log(data, "API request");
				});


				// 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
				// here two, it's significantly less boilerplate code needed to verify an expected request
				backend.expectOne({
					url: 'http://localhost:4201/api/getBusSchedules',
					method: 'GET'
				});

			})
		)
	);

	it(`should send an expected get bus data request`, async (inject([BusService, HttpTestingController],
		(service: BusService, backend: HttpTestingController) => {
			service.getBusSchedules().subscribe((data) => {
				//expect(next).toEqual({ baz: '123' });
				console.log(data, "attempt to test API");
				expect(data[0].organisation).toBe('Sydney buses abcd');
			});

		})));
});