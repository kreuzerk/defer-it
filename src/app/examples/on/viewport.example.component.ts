import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'viewport-example',
  template: `
    <h1>On Viewport</h1>
    <div class="huge">
    </div>
    @defer (on viewport) {
    <child/>
    } @placeholder {
    <input/>
      }
  `,
  styles: [`
    .huge {
      background: blue;
      height: 2000px;
      width: 50%vw;
    }
  `],
  imports: [ChildComponent, AsyncPipe]
})
export class ViewportExampleComponent {
}
