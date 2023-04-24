import { Route, provideRouter } from '@angular/router';
const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./components/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: (): any => import('./components/about.component').then(c => c.AboutComponent)
    }
];
export const appRouting = [
    provideRouter(routes)
]