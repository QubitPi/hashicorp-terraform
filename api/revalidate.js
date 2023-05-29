"use strict";
(() => {
var exports = {};
exports.id = 3500;
exports.ids = [3500];
exports.modules = {

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 52591:
/***/ ((module) => {

module.exports = require("moize");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 64173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ revalidate)
});

// EXTERNAL MODULE: external "http-status-codes"
var external_http_status_codes_ = __webpack_require__(48010);
// EXTERNAL MODULE: ./src/lib/api-validate-token.ts
var api_validate_token = __webpack_require__(51941);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "moize"
var external_moize_ = __webpack_require__(52591);
var external_moize_default = /*#__PURE__*/__webpack_require__.n(external_moize_);
;// CONCATENATED MODULE: ./src/lib/get-product-data.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function getProductData(product) {
    try {
        const productData = JSON.parse(external_fs_default().readFileSync(external_path_default().join(process.cwd(), `src/data/${product}.json`), "utf-8"));
        return productData;
    } catch (e) {
        console.error(`[Error]: unable to fetch product data for ${product} — ${e.message}`);
        throw e;
    }
}
const cachedGetProductData = external_moize_default()(getProductData);

;// CONCATENATED MODULE: ./src/pages/api/revalidate.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * @TODO move this into the /api/revalidate dir and update the filename to something like 'docs'
 * https://app.asana.com/0/1202097197789424/1204094036463681
 *
 * Accepts a POST request with a product slug, triggers revalidation for all of a product's docs paths
 * specified in its latest nav data.
 */ async function handler(request, response) {
    if (request.method !== "POST") {
        response.status(external_http_status_codes_.StatusCodes.NOT_FOUND);
        return;
    }
    const { product  } = request.body;
    if (!product) {
        response.status(external_http_status_codes_.StatusCodes.BAD_REQUEST).json({
            error: "No product provided."
        });
        return;
    }
    // Handle TF's sub-projects
    let resolvedProduct = product;
    if (resolvedProduct.startsWith("terraform-") || resolvedProduct === "ptfe-releases") {
        resolvedProduct = "terraform";
    }
    const productData = cachedGetProductData(resolvedProduct);
    const navDataPrefixes = productData.rootDocsPaths.map(({ navDataPrefix , path , productSlugForLoader  })=>{
        return {
            navDataPrefix,
            path,
            productSlugForLoader
        };
    });
    // fetch the latest nav data, which will be used to construct paths to revalidate
    const navDataFiles = (await Promise.all(navDataPrefixes.map(async ({ navDataPrefix , path , productSlugForLoader  })=>{
        // Only re-validate a TF sub-project's paths
        // We set resolvedProduct to `terraform`, but product will be one of the sub-project slugs
        if (product !== resolvedProduct && productSlugForLoader !== product) {
            return false;
        }
        // Default productSlugForLoader to `product` if undefined
        productSlugForLoader ||= product;
        const prefix = navDataPrefix ?? path;
        const response = await fetch(`https://content.hashicorp.com/api/content/${productSlugForLoader}/nav-data/latest/${prefix}`);
        const { result  } = await response.json();
        if (!result || !result.navData) {
            console.log(`[revalidate] failed to find nav data for path: ${path}. It is possible that this path does not have nav data, this is likely safe to ignore.`);
            return false;
        }
        return [
            path,
            result.navData
        ];
    }))).filter(Boolean);
    const revalidatePromises = [];
    // iterates through nav data recursively and creates a revalidate request
    function revalidateNavNodes(basePath, nodes) {
        nodes.forEach(({ path , routes  })=>{
            if (routes) {
                revalidateNavNodes(basePath, routes);
                return;
            }
            if (typeof path !== "undefined") {
                const pathToRevalidate = `/${resolvedProduct}/${basePath}/${path}`// remove any trailing slash
                .replace(/\/$/, "");
                console.log("[revalidate]", pathToRevalidate);
                revalidatePromises.push(response.revalidate(pathToRevalidate));
            }
        });
    }
    // iterate over each nav node and revalidate its path
    navDataFiles.forEach(([basePath, navData])=>{
        revalidateNavNodes(basePath, navData);
    });
    // TODO(brkalow): Add resiliency here, this has the potential to send off hundreds of calls depending on the product, so we should think about how we want to handle network hiccups or partial failure.
    // wait for everything to get revalidated
    await Promise.allSettled(revalidatePromises);
    response.status(200).end();
}
/* harmony default export */ const revalidate = ((0,api_validate_token/* validateToken */.R)(handler, {
    token: process.env.REVALIDATE_TOKEN,
    onlyMethods: [
        "POST"
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1941], () => (__webpack_exec__(64173)));
module.exports = __webpack_exports__;

})();