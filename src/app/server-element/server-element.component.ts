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
  ViewChild,
  ElementRef,
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
  @ViewChild('heading', { static: true }) header: ElementRef;

  constructor() {
    console.log(`🔎 | server-element | constructor`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`🔎 | server-element | ngOnChanges`);
    console.log(`🔎 | server-element | ngOnChanges > changes:`, changes);
  }

  ngOnInit() {
    console.log(`🔎 | server-element | ngOnInit`);
    console.log(
      `🔎 | server-element | ngOnInit > header`,
      this.header.nativeElement.textContent
    );
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
    console.log(
      `🔎 | server-element | ngAfterViewInit > header`,
      this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log(`🔎 | server-element | ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`🔎 | server-element | ngOnDestroy`);
  }
}
