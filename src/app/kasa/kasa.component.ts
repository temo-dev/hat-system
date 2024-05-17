import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-kasa',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzGridModule,
    NzCardModule,
    NzFlexModule,
    NzDrawerModule,
  ],
  templateUrl: './kasa.component.html',
  styleUrl: './kasa.component.less',
})
export class KasaComponent {
  isDrawered = false;
  list = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  trigerDrawer() {
    this.isDrawered = !this.isDrawered;
  }
}
