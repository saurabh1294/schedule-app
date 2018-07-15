import {
    TestBed,
    async,
    fakeAsync,
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
import { By } from '@angular/platform-browser';

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

    it('test API response and UI', async (() => {

        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        let response = {
            "data": [{
                    "organisation": "Sydney Buses",
                    "date": "25/09/2015",
                    "busData": [{
                            "busId": "42612",
                            "routeVariant": "891 2 1",
                            "deviationFromTimetable": 77
                        },
                        {
                            "busId": "29016",
                            "routeVariant": "400 1 1",
                            "deviationFromTimetable": 340
                        },
                        {
                            "busId": "90467",
                            "routeVariant": "393 1 1",
                            "deviationFromTimetable": 220
                        },
                        {
                            "busId": "88836",
                            "routeVariant": "M20 1 0",
                            "deviationFromTimetable": -287
                        },
                        {
                            "busId": "79367",
                            "routeVariant": "L21 2 1",
                            "deviationFromTimetable": 347
                        }
                    ]
                },
                {
                    "organisation": "Westbus",
                    "date": "25/09/2015",
                    "busData": [{
                            "busId": "94811",
                            "routeVariant": "664 2 1",
                            "deviationFromTimetable": 164
                        },
                        {
                            "busId": "62788",
                            "routeVariant": "UNKNOWN",
                            "deviationFromTimetable": null
                        },
                        {
                            "busId": "14221",
                            "routeVariant": "834 1 1",
                            "deviationFromTimetable": 423
                        }
                    ]
                }
            ]
        }

		setTimeout(function(){
		console.log("HERE", fixture.debugElement.query(By.css('h1')));
		}, 1000);
		
        //expect(compiled.querySelector('.js-bustitle').textContent).toContain('Sydney Buses - 25/09/2015');
    }));
});