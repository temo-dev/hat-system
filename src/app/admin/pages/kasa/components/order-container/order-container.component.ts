import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CardOrderComponent } from '../card-order/card-order.component';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
@Component({
  selector: 'app-order-container',
  standalone: true,
  imports: [NzTabsModule, CardOrderComponent, NzFlexModule, NzDrawerModule],
  templateUrl: './order-container.component.html',
  styleUrl: './order-container.component.less',
})
export class OrderContainerComponent {}
