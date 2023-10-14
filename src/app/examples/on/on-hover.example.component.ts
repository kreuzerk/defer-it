import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'on-hover-example',
  template: `
    <h1>Click example</h1>
    @defer (on hover) {
    <child/>
    } @placeholder {
    <input/>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class OnHoverExampleComponent {
}
