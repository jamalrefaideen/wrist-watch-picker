# NgxAnalogWristWatch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Demo
Here it is a Demo. please [click](https://wristwatch.now.sh/) here;

## Installation

`npm i ngx-analog-wrist-watch`


## Usage       

1) Register the `NgxAnalogWristWatchModule` in your app module.
 > `import { NgxAnalogWristWatchModule } from 'ngx-analog-wrist-watch'`

 ```typescript

import { NgxAnalogWristWatchModule } from 'ngx-analog-wrist-watch';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxAnalogWristWatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

2) Use the directive `(ngxWristAnalogwristwatch)` in your component.

```typescript
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: ` <div ngxWristAnalogwristwatch (timeVal)="getVal($event)"></div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { }
 ```

 ## Props
| Name          | optional        | Default |
| :------------ |:---------------:| -----:  |
| fontSize	    | yes             | inherit |
| id            | no              |         |
| label         | yes             |         |
| blur          | yes             |         |
| focus         | yes             |         |
| type          | yes             |         |
| div           | yes             |         |
| (timVal)      | yes             |         | 

## License
MIT
