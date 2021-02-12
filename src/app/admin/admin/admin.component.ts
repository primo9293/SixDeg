import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PeliculasService } from '../../core/services/peliculas.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  form: FormGroup;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  constructor(private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private router: Router,
    private pelicuService: PeliculasService,
    private _snackBar: MatSnackBar) { 

    this.buildForm();

   }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      key: ['', []],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      listaactores: ['', [Validators.required, Validators.minLength(5)]],
      director: ['', [Validators.required, Validators.minLength(5)]],
      costo: ['', [Validators.required, Validators.min(2)]],
      cantidad: ['', [Validators.required, Validators.min(2)]],
    });
  }

  
  get tituloField(){
    return this.form.get('titulo');
  }

  get descripcionField() {
    return this.form.get('descripcion');
  }

  get listaactoresField(){
    return this.form.get('listaactores');
  }

  get directorField() {
    return this.form.get('director');
  }

  get costoField(){
    return this.form.get('costo');
  }

  get cantidadField() {
    return this.form.get('cantidad');
  }

  guardar(){
    if (this.form.valid) {
      const data = this.form.value
      this.pelicuService.addPelicula(data)
      .then(() => {
        this._snackBar.open('Película añadida al catálogo', 'Cerrar', {
          duration: 2000,
        });
        this.router.navigate(['/catalogo']);
      })
      .catch(() => {
        alert('Error al insertar la pelicula');
      });

    } else{
      this.form.markAllAsTouched()
    }
  }


}
