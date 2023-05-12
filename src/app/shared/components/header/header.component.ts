import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('header') header!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window?.document.documentElement.scrollTop || 0;
    console.log(scrollY)
    if (scrollY > 0) {
      this.header.nativeElement.classList.add('scrolled');
    } else {
      this.header.nativeElement.classList.remove('scrolled');
    }
  }
}
