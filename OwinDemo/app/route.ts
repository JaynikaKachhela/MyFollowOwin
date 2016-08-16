import { provideRouter, RouterConfig }  from '@angular/router';
import { UserComponent } from './User/user.component';

const routes: RouterConfig = [
    {
        path: 'User',
        component: UserComponent
    },
    {
        path: '',
        redirectTo: '/User',
        pathMatch: 'full'
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];