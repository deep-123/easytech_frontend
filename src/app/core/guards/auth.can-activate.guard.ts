import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from '@core/services'


@Injectable()  
export class CanActivateGuard implements CanActivate  {  
      
//constructor(private authService: AuthService){}  
constructor(){}  
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
          
     //   return this.authService.isAuthenticated();  

    //Logic of authenticating user by calling some API service.  
    // For e.g. Here Authservice has a isAuthenticated() method which further  
    // Check user is valid or not.  
    }  
} 
