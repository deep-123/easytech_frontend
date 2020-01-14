import { Injectable } from '@angular/core';
import { CanLoad, Route,CanDeactivate, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export interface CanComponentDeactivate {  
  
  canDeactivate:() => Observable<boolean>| Promise<boolean> | boolean;  
}  

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{  

  canDeactivate(component: CanComponentDeactivate,  
      currentRoute : ActivatedRouteSnapshot,  
      state : RouterStateSnapshot,  
      next? : RouterStateSnapshot) : Observable<boolean>| Promise<boolean> | boolean{  

          return component.canDeactivate();  
  }  
}  