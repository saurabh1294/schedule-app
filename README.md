# ScheduleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setup and run instructions

Pull this repo go inside the project root and run npm install

Install below packages globally using the below commands

npm install -g @angular/cli
npm install -g nodemon

Open a tab and start server using the command:- nodemon server/server.js --watch server.  This will start server on port 4201

Open another tab and run client using command:- ng serve --proxy-config proxy.config.json. This will start client angularapp on port 4200.


If running on Linux 
* combine the above 2 commands like :- nodemon server/server.js --watch server& && ng serve --proxy-config proxy.config.json



## Assumptions of this application:

* If the json response attribute 'deviationFromTimetable' < 0, the corresponding bus is late
* If the json response attribute 'deviationFromTimetable' > 0, the corresponding bus is early
* If the json response attribute 'deviationFromTimetable' = 0, the corresponding bus is on time
* If the json response attribute 'deviationFromTimetable' = null, the corresponding bus timing is shown as UNKNOWN in the table


## Note
* The above commands/tasks can be automated and a single command can be used via Grunt or Gulp.
* I haven't used Grunt in this project. Another simple project which uses Grunt and it's corresponding Gruntfile can be found
at:- https://github.com/saurabh1294/angular2Demo/blob/master/Gruntfile.js
* ## Since the whole markup of this application is controlled by ngIf, it's difficult to test every piece of this application as is.
* To test this application as a whole, the entire markup of the application is to be prefilled via static json response due
  to reasons mentioned in point 3 above. I haven't written all test cases covering this application owing to time constraints because 
  the whole application structure will have to be tweaked just for testing purpose. However, it's easy to test the application through
  various tests like UI element/s matching with static JSON response data ,simulating mouse clicks by using triggerEventHandler(), spyOn() etc.
  If you are keen to check some sample test scripts, please refer this link to one of my old repos 
  here:- https://github.com/saurabh1294/weather-simulation/blob/master/tests/tests-spec.js. 
  The demo link to this application can be found on my blog:- http://golibrary.co/weather-simulation/