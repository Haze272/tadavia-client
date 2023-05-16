import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-heading-underline',
  templateUrl: './heading-underline.component.html',
  styleUrls: ['./heading-underline.component.scss']
})
export class HeadingUnderlineComponent {
  @Input() text!: string;
}
