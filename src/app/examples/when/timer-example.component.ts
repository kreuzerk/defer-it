import {Component} from "@angular/core";
import {delay, of} from "rxjs";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'timer-example',
  template: `
      <h1>Timer example</h1>
      @defer (when timer$ | async) {
        <child/>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class TimerExampleComponent {
  timer$ = of(true).pipe(
    delay(5000)
  );

}
