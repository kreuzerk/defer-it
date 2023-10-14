import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'on-interaction-example',
  template: `
    <h1>On interaction example</h1>
    @defer (on interaction) {
    <child/>
    } @placeholder {
    <input/>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class OnInteractionExampleComponent {
}
