import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

import {ChildComponent} from "./shared/child.component";
import {TimerExampleComponent} from "./examples/when/timer-example.component";
import {OnTimerExampleComponent} from "./examples/on/on-timer.example.component";
import {PlaceholderExampleComponent} from "./examples/placeholder/placeholder-example.component";
import {OnInteractionExampleComponent} from "./examples/on/on-interaction.example.component";
import {OnHoverExampleComponent} from "./examples/on/on-hover.example.component";
import {ViewportExampleComponent} from "./examples/on/viewport.example.component";
import {LoadingExampleComponent} from "./examples/loading/loading.component";
import {LoadingWithPlaceholderComponent} from "./examples/loading/loading-with-placeholder.component";
import {LoadingErrorPlaceholderComponent} from "./examples/loading/loading-error.component";
import {ViewportReferenceExampleComponent} from "./examples/on/viewport-reference.example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, TimerExampleComponent, OnTimerExampleComponent, PlaceholderExampleComponent, OnInteractionExampleComponent, OnHoverExampleComponent, ViewportExampleComponent, LoadingExampleComponent, LoadingWithPlaceholderComponent, LoadingErrorPlaceholderComponent, ViewportReferenceExampleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'defer-it';
}
