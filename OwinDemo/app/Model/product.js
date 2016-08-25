"use strict";
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var ProductType;
(function (ProductType) {
    ProductType[ProductType["Mobile"] = 1] = "Mobile";
    ProductType[ProductType["web"] = 2] = "web";
    ProductType[ProductType["IoT"] = 3] = "IoT";
})(ProductType || (ProductType = {}));
//# sourceMappingURL=product.js.map