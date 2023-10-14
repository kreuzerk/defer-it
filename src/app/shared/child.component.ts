import {AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from "@angular/core";

@Component({
  standalone: true,
  selector: 'child',
  template: `
    <h2>Child</h2>
  `
})
export class ChildComponent implements OnChanges, OnInit, AfterViewInit, DoCheck {

  constructor() {
    console.log('ChildComponent constructor');
  }

  ngAfterViewInit(): void {
    console.log('ChildComponent ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ChildComponent ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ChildComponent ngOnInit');
  }
}
