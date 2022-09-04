import {Directive, HostListener} from '@angular/core';
@Directive({
  selector: 'a[href="#"]'
})

export class AlinkDirective {

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    e.preventDefault();
  }

}
