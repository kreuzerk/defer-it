import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'loading-example',
  template: `
      <h1>Timer example</h1>
      @defer (on timer(5s)) {
        <child/>
      } @loading (minimum 2s) {
        <div>...loading</div>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class LoadingExampleComponent {
}
