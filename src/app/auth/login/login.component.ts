import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  textingr: string;
  boton: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user_mail: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      user_password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get correoField(){
    return this.form.get('user_mail');
  }

  get passwordField() {
    return this.form.get('user_password');
  }


  iniciar() {
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login( value.user_mail, value.user_password )
          .then(() => {
            this.authService.obtenerUsuario()
              this._snackBar.open('Inicio Exitoso', 'Cerrar', {
                duration: 2000,
              });
            
            this.router.navigate(['/admin']);
          })
          .catch(() => {
            alert('No es valido');
          });
    }else {
      this.form.markAllAsTouched()
    }

  }

}
