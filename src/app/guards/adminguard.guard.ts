import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from '../core/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
       map(userData => userData === null ? false : true),
      tap(hasUser => {
        console.log('hasUser',hasUser);
        if ( !hasUser ) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }

}
