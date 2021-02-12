import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
        .then(() => {
          this.router.navigate(['./home']);
        });
  }

}
