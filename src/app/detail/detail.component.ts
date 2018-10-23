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
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input()
  heroes;

  @ViewChild('randomTitle')
  title: ElementRef;

  constructor() {
    // console.log('1', 'constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('2', 'onChange');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log('3', 'ngOnInit');
    // console.log('randomTitle', this.title.nativeElement);
  }

  ngDoCheck(): void {
    // console.log('4', 'ngDoCheck');
  }
  ngAfterContentInit(): void {
    // console.log('5', 'ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('6', 'ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log('7', 'ngAfterViewInit');
    // console.log('randomTitle', this.title.nativeElement);
  }
  ngAfterViewChecked(): void {
    // console.log('8', 'ngAfterViewChecked');
  }
}
