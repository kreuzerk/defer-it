import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'on-timer-example',
  template: `
    <h1>On Timer and interaction example</h1>
    @defer (on interaction, timer(5s)) {
    <child/>
    } @placeholder {
        <div>Placeholder</div>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class OnTimerAndInteractionExampleComponent {
}
