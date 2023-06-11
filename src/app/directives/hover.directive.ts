import { Directive,ElementRef, HostListener ,OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnChanges  {
  @Input() hover: string = '5px 5px 10px black';
  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.boxShadow = `${this.hover}`;
    this.el.nativeElement.style.opacity = ".7";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = 'none';
    this.el.nativeElement.style.opacity = "1";
  }
  ngOnChanges(): void {
    this.el.nativeElement.style.boxShadow = `${this.hover}`;

  }

}
