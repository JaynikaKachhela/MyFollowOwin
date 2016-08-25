import { provideRouter, RouterConfig }  from '@angular/router';
import { Productcomponent } from './EndUser/Product';
import {FollowProductcomponent}from './EndUser/FollowProducts'
import {ToBeProductOwnercomponent}from './EndUser/tobeProductOwner'
import {OwnProductcomponent}from './ProductOwner/ownProduct'
import {NewProductcomponent}from './ProductOwner/newProduct'
import {AllProductcomponent}from './ProductOwner/allProduct'



const routes: RouterConfig = [
    {
        path: 'products',
        component: Productcomponent
    },
    {
        path: 'followProducts',
        component: FollowProductcomponent
    },
    {
        path: 'followedProducts',
        component: FollowProductcomponent
    },
    {
        path: 'ownProducts',
        component: OwnProductcomponent
    },
    {
        path: 'newProduct',
        component: NewProductcomponent
    },
    {
        path: 'allProduct',
        component: AllProductcomponent
    },
    {
        path: 'tobeProductOwner',
        component: ToBeProductOwnercomponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];