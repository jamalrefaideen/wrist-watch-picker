import { NgModule } from '@angular/core';
import { NgxAnalogWristWatchComponent } from './ngx-analog-wrist-watch.component';
import { AnalogwristwatchDirective } from './analogwristwatch.directive';



@NgModule({
  declarations: [NgxAnalogWristWatchComponent, AnalogwristwatchDirective],
  imports: [
  ],
  exports: [NgxAnalogWristWatchComponent, AnalogwristwatchDirective]
})
export class NgxAnalogWristWatchModule { }
