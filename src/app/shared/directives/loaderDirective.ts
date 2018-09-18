import { Directive, ElementRef, Input,  OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: "[loader]"
})
/**
 * @author - Snehal Dhane
 * Directive to download file
 */
export class LoaderDirective implements OnChanges{
  @Input()
  show: string;
  private element: any;
  constructor(el: ElementRef, public renderer: Renderer2) {
      this.element = el;
  }

  ngOnInit() {

  }
  ngOnChanges(){
    if(this.show) {
      this.renderer.addClass(this.element.nativeElement, 'loading');
      // this.element.nativeElement.style.backgroundColor = 'yellow';
    }else{
      this.renderer.removeClass(this.element.nativeElement, 'loading');
      // this.element.nativeElement.style.backgroundColor = 'red';
    }
  }
}
