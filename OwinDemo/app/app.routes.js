"use strict";
var router_1 = require('@angular/router');
var Product_1 = require('./EndUser/Product');
var FollowProducts_1 = require('./EndUser/FollowProducts');
var FollowProducts_2 = require('./ProductOwner/FollowProducts');
var tobeProductOwner_1 = require('./EndUser/tobeProductOwner');
var ownProduct_1 = require('./ProductOwner/ownProduct');
var newProduct_1 = require('./ProductOwner/newProduct');
var allProduct_1 = require('./ProductOwner/allProduct');
var routes = [
    {
        path: 'products',
        component: Product_1.Productcomponent
    },
    {
        path: 'followProducts',
        component: FollowProducts_2.FollowedProductcomponent
    },
    {
        path: 'followedProducts',
        component: FollowProducts_1.FollowProductcomponent
    },
    {
        path: 'ownProducts',
        component: ownProduct_1.OwnProductcomponent
    },
    {
        path: 'newProduct',
        component: newProduct_1.NewProductcomponent
    },
    {
        path: 'allProduct',
        component: allProduct_1.AllProductcomponent
    },
    {
        path: 'tobeProductOwner',
        component: tobeProductOwner_1.ToBeProductOwnercomponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map