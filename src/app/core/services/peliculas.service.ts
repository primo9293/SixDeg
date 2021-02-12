import { Injectable } from '@angular/core';

import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pelicula } from './../interface/pelicula';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey:string =  "b27d54d9f5fd3664bdb8214172391b7e";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  private peliculasDb: AngularFireList<Pelicula>;

  peliculas:any[]= [];

  constructor( private jsonp: HttpClientJsonpModule,
               private http : HttpClient,
               private db: AngularFireDatabase) { 
                this.peliculasDb = this.db.list('/peliculas', ref => ref.orderByChild('name'));
               }

  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );
    let desdeStr =  `${ desde.getFullYear() }-0${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    let hastaStr =  `${ hasta.getFullYear() }-0${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr}&primary_release_date.lte=${ hastaStr}&api_key=${this.apiKey}&language=es`;
    
    return this.http.get( url )
                    .pipe( map( res => {
                      return res['results'];
                    }));                    
  }

  getPopulares(){
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get( url )
                    .pipe( map( res => {
                      return res['results'];
                    }));                    
  }

  getPopularesKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    
    return this.http.get( url )
                    .pipe( map( res => {
                      return res['results'];
                    }));
                    
  }


  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es`;

    return this.http.get( url )
                    .pipe( map( res => {
                    this.peliculas = res['results'];
                    return res['results'];
                    }));
  }

  getPelicula( id:string ){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${this.apiKey}&language=es`;
    
    return this.http.get( url )
                    .pipe( map( res => {
                      return res;
                    }));
                    
  }

  getPeliculasFire(): Observable<Pelicula[]> {
    return this.peliculasDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.key, ...c.payload.val() }));
      })
    );
  }

  addPelicula(pelicula: Pelicula) {
    return this.peliculasDb.push(pelicula);
  }

  deletePeliculaFire(id: string){
    this.db.list('/peliculas').remove(id).then(() => {
      return true
    })
    .catch(() => {
      return false
    });
  }
}
