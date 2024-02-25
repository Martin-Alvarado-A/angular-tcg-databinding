import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log(`🔎 | server-element | constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`🔎 | server-element | ngOnChanges`);
    console.log(`🔎 | server-element | ngOnChanges > changes:`, changes);
  }

  ngOnInit() {
    console.log(`🔎 | server-element | ngOnInit`);
  }

  ngDoCheck(): void {
    console.log(`🔎 | server-element | ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`🔎 | server-element | ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`🔎 | server-element | ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`🔎 | server-element | ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`🔎 | server-element | ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`🔎 | server-element | ngOnDestroy`);
  }
}
