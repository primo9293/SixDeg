import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../core/services/peliculas.service';
import { Pelicula } from '../../core/interface/pelicula';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  peliculas: Pelicula[];

  displayedColumns: string[] = [ 'Titulo', 'Descripcion', 'Director','Costo','Cantidad','Accion'];
  dataSource : Pelicula[];

  constructor( private pelicuService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculas()
  }

  obtenerPeliculas(){
    this.pelicuService.getPeliculasFire().subscribe( res => {
      console.log('res',res)
      this.peliculas = res
      this.dataSource = res
    })
  }

  eliminar(data){
    console.log('data',data);
    const id = data.$key
    this.pelicuService.deletePeliculaFire(id)
  }

}
