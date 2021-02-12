import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  
  url_imagen:string = "http://image.tmdb.org/t/p/w300";
  
  transform( pelicula: any, poster:boolean = false ): any {
    if(poster){
      return this.url_imagen + pelicula.poster_path
    }  
    
    if( pelicula.backdrop_path ){
        return this.url_imagen + pelicula.backdrop_path
      }else{
        if( pelicula.poster_path ){
          return this.url_imagen + pelicula.poster_path
        }else{
          return "assets/img/noimage.png";
        }
      }
  }

}
