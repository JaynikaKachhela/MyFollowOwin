"use strict";
var router_1 = require('@angular/router');
var Product_1 = require('./EndUser/Product');
var FollowProducts_1 = require('./EndUser/FollowProducts');
var tobeProductOwner_1 = require('./EndUser/tobeProductOwner');
var ownProduct_1 = require('./ProductOwner/ownProduct');
var newProduct_1 = require('./ProductOwner/newProduct');
var allProduct_1 = require('./ProductOwner/allProduct');
var routes = [
    {
        path: 'User/Index/products',
        component: Product_1.Productcomponent
    },
    {
        path: 'User/ProductOwner/followProducts',
        component: FollowProducts_1.FollowProductcomponent
    },
    {
        path: 'User/Index/followedProducts',
        component: FollowProducts_1.FollowProductcomponent
    },
    {
        path: 'User/ProductOwner/ownProducts',
        component: ownProduct_1.OwnProductcomponent
    },
    {
        path: 'User/ProductOwner/newProduct',
        component: newProduct_1.NewProductcomponent
    },
    {
        path: 'User/ProductOwner/allProduct',
        component: allProduct_1.AllProductcomponent
    },
    {
        path: 'User/Index/tobeProductOwner',
        component: tobeProductOwner_1.ToBeProductOwnercomponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map