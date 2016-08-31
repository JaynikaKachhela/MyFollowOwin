import { provideRouter, RouterConfig }  from '@angular/router';
import { Productcomponent } from './EndUser/Product';
import {FollowProductcomponent}from './EndUser/FollowProducts'
import {ToBeProductOwnercomponent}from './EndUser/tobeProductOwner'
import {OwnProductcomponent}from './ProductOwner/ownProduct'
import {NewProductcomponent}from './ProductOwner/newProduct'
import {AllProductcomponent}from './ProductOwner/allProduct'



const routes: RouterConfig = [
    {
        path: 'User/Index/products',
        component: Productcomponent
    },
    {
        path: 'User/ProductOwner/followProducts',
        component: FollowProductcomponent
    },
    {
        path: 'User/Index/followedProducts',
        component: FollowProductcomponent
    },
    {
        path: 'User/ProductOwner/ownProducts',
        component: OwnProductcomponent
    },
    {
        path: 'User/ProductOwner/newProduct',
        component: NewProductcomponent
    },
    {
        path: 'User/ProductOwner/allProduct',
        component: AllProductcomponent
    },
    {
        path: 'User/Index/tobeProductOwner',
        component: ToBeProductOwnercomponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];