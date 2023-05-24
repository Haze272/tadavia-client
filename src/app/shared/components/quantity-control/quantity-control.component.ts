import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.scss']
})
export class QuantityControlComponent {
  quantity: number = 1;
  @Output() changeQuantity = new EventEmitter<number>();
  @Output() delete = new EventEmitter();

  decrease() {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.changeQuantity.emit(this.quantity);
    }
    else if (this.quantity === 1) {
      this.delete.emit();
    }
  }

  increase() {
    this.quantity += 1;
    this.changeQuantity.emit(this.quantity);
  }

}
