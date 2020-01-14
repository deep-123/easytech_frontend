import { Injectable } from "@angular/core";  
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";  
  
@Injectable()  
export class AuthenticationGuard implements CanActivateChild  {  
      
constructor(private authService: AuthService){}  
  
  
    CanActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
          
        return this.authService.isAuthenticated();  
    //Logic of authenticating user by calling some API service.  
    // For e.g. Here Authservice has a isAuthenticated() method which further  
    // Check user is valid or not.  
    }  
}  