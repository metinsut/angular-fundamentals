import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
    @Input() defaultColor: string;
    @Input() highLightColor: string;
    @HostBinding('style.backgroundColor') bgColor = 'transparent';
    @HostBinding('style.color') color = this.defaultColor;

    constructor(private elem: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.elem.nativeElement.style.fontSize = '30px';
        this.renderer.setStyle(this.elem.nativeElement, 'color', 'orange');
        this.color = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elem.nativeElement, 'backgroundColor', '#137177');
        this.bgColor = '#137177';
        this.color = this.highLightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elem.nativeElement, 'backgroundColor', 'transparent');
        this.bgColor = 'transparent';
        this.color = this.defaultColor;
    }
    @HostListener('click') click(eventData: Event) {
        this.renderer.setStyle(this.elem.nativeElement, 'fontSize', '50px');
    }
    // @HostListener('click') offclick(eventData: Event) {
    //     this.renderer.setStyle(document.getElementsByTagName('body'), 'fontSize', '30px');
    // }
    @HostListener('click')
    clickInside() {
        console.log('p');
    }

    @HostListener('document:click', ['$event'])
    clickout() {
        console.log('window');
        console.log(event.target);
        if (this.elem.nativeElement.contains(event.target)) {
            console.log('clicked p');
        } else {
            console.log('clicked out');
        }
    }

}
