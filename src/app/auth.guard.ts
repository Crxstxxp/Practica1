import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router
  ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let response = true
    console.log(this.authService.isAuthenticatedUser());

    if (!this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/login'])
      response = false
    }
    return response
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
