import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'loading-error-placeholder-example',
  template: `
      <h1>Loading & Hover example</h1>
      @defer (on hover) {
        <child/>
      } @loading (minimum 2s) {
        <div>...loading</div>
      } @error {
        <div>Error</div>
      }
      @placeholder {
        <div>Placeholder</div>
      }
  `,
  imports: [ChildComponent, AsyncPipe]
})
export class LoadingErrorPlaceholderComponent {
}
