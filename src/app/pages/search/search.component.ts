import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../core/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  buscar:string = ""

  constructor( public pelicu_service: PeliculasService,
               public dato_router_url_recibo: ActivatedRoute ) {
      this.dato_router_url_recibo.params.subscribe( parametros => {
        console.log(parametros);
        if( parametros['texto'] ){
          this.buscar = parametros['texto'];
          this.buscarPelicula();
        }
        
      })      
  }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if( this.buscar.length == 0 ){
      return console.log('null');
    }else{
      console.log('Data');
      this.pelicu_service.buscarPelicula( this.buscar )
                         .subscribe()
    }
  }

}
