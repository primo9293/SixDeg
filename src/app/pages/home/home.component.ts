import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PeliculasService } from '../../core/services/peliculas.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas: any[] = [];
  peliculasKids: any[] = [];
  loading :boolean;
  error: boolean;
  mensajeError: string;

  cartelera: any;
  populares: any;
  populareskids: any;

  usuario: any;
  userState: any;

  constructor(public pelicu_Servic: PeliculasService,
    private router: Router,
    private auth: AuthService,){
      this.cargarCartelera()
    }

  ngOnInit(): void {

  }

  cargarCartelera(){
    this.pelicu_Servic.getCartelera()
                  .subscribe( data => {
                    this.cartelera = data
                    // console.log('---',this.cartelera);
                  })                
      
      this.pelicu_Servic.getPopulares()
                  .subscribe( data => this.populares = data)                                      
      
      this.pelicu_Servic.getPopularesKids()
                  .subscribe( data => this.populareskids = data)                                                            
  }

  verificarUsuario(){
    var localUsuario = localStorage.setItem('user', JSON.stringify(this.userState));
    console.log('localUsuario11',localUsuario);
    // this.usuario = this.auth.isLoggedIn
    // this.validarRutas(this.usuario)
    console.log('111',this.usuario);
    return this.usuario; 
    }

}
