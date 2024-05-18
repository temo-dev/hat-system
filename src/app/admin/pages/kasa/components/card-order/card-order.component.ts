import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { PaymentOrderComponent } from '../payment-order/payment-order.component';
@Component({
  selector: 'app-card-order',
  standalone: true,
  imports: [
    NzCardModule,
    NzIconModule,
    NzFlexModule,
    NzDrawerModule,
    PaymentOrderComponent,
  ],
  templateUrl: './card-order.component.html',
  styleUrl: './card-order.component.less',
})
export class CardOrderComponent {
  isDrawed: boolean = false;
  triggerDraw() {
    this.isDrawed = !this.isDrawed;
  }
}
