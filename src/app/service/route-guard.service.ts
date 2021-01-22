import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardCodedAuthenticationservice.isUserLoggedIn())
    return true;
    this.router.navigate(['login']);
    return false;
  }
  constructor(
    private hardCodedAuthenticationservice: HardcodedAuthenticationService,private router:Router) {}
}
