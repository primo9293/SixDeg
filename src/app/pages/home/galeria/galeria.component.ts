import { Component, OnInit, Input } from '@angular/core';
import { ConfirmComponent } from '../../dialog/confirm/confirm.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas:any;
  @Input('titulo') titulo:any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.peliculasa
  }
  
  peliculasa(){
    console.log('peliculas',this.peliculas);
  }

  inicio(){
    const dialogRef = this.dialog.open(ConfirmComponent as any, {
      disableClose: true,
      panelClass: 'override-style',
      data: {
        title: 'Registrate o Inicia Sesión',
        message: `para acceder a ciertos de contenidos `
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (res.opcion === 'Login') {
         
        } else if (res.opcion == 'Registrar') {
          
        } else if (res.opcion == 'Descartar') {
          
        }
      }
    })
  }

}
