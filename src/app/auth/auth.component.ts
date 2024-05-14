import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginComponent, NzWaterMarkModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.less',
})
export class AuthComponent {}
