import {
	BrowserModule
} from '@angular/platform-browser';
import {
	NgModule
} from '@angular/core';
import {
	BusService
} from "./app.component.service";
import {
	AppComponent
} from './app.component';
import {
	HttpClientModule
} from '@angular/common/http';
import {
	HttpErrorHandler,
	HandleError
} from './app.component.handleError.service';
import {
	FormsModule
} from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [BusService,
		HttpErrorHandler
	],
	bootstrap: [AppComponent]
})
export class AppModule {}