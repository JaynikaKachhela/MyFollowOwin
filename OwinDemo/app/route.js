"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./User/user.component');
var routes = [
    {
        path: 'User',
        component: user_component_1.UserComponent
    },
    {
        path: '',
        redirectTo: '/User',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map