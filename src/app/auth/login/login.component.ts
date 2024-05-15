import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import { login } from '../../core/store/auth/auth.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    NzTypographyModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private store: Store<AppState>
  ) {}

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      let data = this.validateForm.value;
      if (data) {
        this.store.dispatch(
          login({
            user: {
              username: data.userName || '',
              password: data.password || '',
            },
          })
        );
      }
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
