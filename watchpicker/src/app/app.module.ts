import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxAnalogWristWatchModule } from 'ngx-analog-wrist-watch';
import { NgxAnalogWristWatchService } from './../../projects/ngx-analog-wrist-watch/src/lib/ngx-analog-wrist-watch.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAnalogWristWatchModule
  ],
  providers: [NgxAnalogWristWatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
