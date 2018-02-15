import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // bring isOpen into scope
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  // Extra hostlistener that closes the dropdown when mouse leaves
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
}
