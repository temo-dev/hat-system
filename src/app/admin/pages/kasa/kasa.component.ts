import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OrderContainerComponent } from './components/order-container/order-container.component';

@Component({
  selector: 'app-kasa',
  standalone: true,
  imports: [NzGridModule, OrderContainerComponent],
  templateUrl: './kasa.component.html',
  styleUrl: './kasa.component.less',
})
export class KasaComponent {}
