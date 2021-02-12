import { OnInit, Inject, Component } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent implements OnInit{

  title: string
  message: string
  constructor(
      public dialogRef: MatDialogRef<ConfirmComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ){
      this.title = data.title
      this.message = data.message
  }

  ngOnInit() {
  }


  close(opcion) {
      if (opcion === 'Cancelar') return this.dialogRef.close({ opcion })
      if (opcion === 'Descartar') return this.dialogRef.close({ opcion })
      if (opcion === 'Aceptar') return this.dialogRef.close({ opcion })
  }
}