import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-kasa',
  standalone: true,
  imports: [
    NzGridModule,
    OrderContainerComponent,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzFlexModule,
  ],
  templateUrl: './kasa.component.html',
  styleUrl: './kasa.component.less',
})
export class KasaComponent {}
