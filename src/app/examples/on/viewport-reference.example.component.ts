import {Component} from "@angular/core";
import {AsyncPipe} from "@angular/common";

import {ChildComponent} from "../../shared/child.component";

@Component({
  standalone: true,
  selector: 'viewport-reference-example',
  template: `
    <h1>On Viewport</h1>
    @defer (on viewport(inputElement)) {
    <child/>
    }
    <div class="huge">
    </div>
    <input #inputElement/>
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
export class ViewportReferenceExampleComponent {
}
