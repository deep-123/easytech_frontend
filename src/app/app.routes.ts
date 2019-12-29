import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { 
        path: 'home', 
        loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
    },
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full'
    }

];