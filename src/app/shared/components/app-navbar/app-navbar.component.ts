import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  usuario: any;
  mostrar: boolean;
  userState: any;

  constructor(private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router) { 
      
    }

  ngOnInit(): void {
    console.log('this.usuario',this.usuario);
    this.verificarUsuario()
  }

  buscarPelicula(texto: string){
    if( texto.length == 0){
        return;
    }
    console.log(texto);
    this.router.navigate(['search',texto]);
  }

  logout(){
    this.auth.logout()
        .then(() => {
          this.router.navigate(['./home']);
        });
  }

  verificarUsuario(){
    var localUsuario = localStorage.setItem('user', JSON.stringify(this.userState));
    // console.log('localUsuario',localUsuario);
    // this.usuario = this.auth.isLoggedIn
    this.validarRutas(this.usuario)
    // console.log('111',this.usuario);
    return this.usuario; 
    }
  

  validarRutas(usuario){
    if (usuario) {
      // this.mostrar = true
    } else {
      // this.mostrar = false
    }
  }

}
