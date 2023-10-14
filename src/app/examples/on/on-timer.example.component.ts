import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'on-timer-example',
  template: `
    <h1>On Timer example</h1>
    @defer (on timer(5s)) {
    <child/>
    } @placeholder {
        <div>Placeholder</div>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class OnTimerExampleComponent {
}
