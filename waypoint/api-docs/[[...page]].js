"use strict";
(() => {
var exports = {};
exports.id = 9933;
exports.ids = [9933];
exports.modules = {

/***/ 14169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_api_docs_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35419);
/* harmony import */ var views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16970);
/* harmony import */ var views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51862);
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_api_docs_view__WEBPACK_IMPORTED_MODULE_1__, views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__, views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_3__]);
([views_api_docs_view__WEBPACK_IMPORTED_MODULE_1__, views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__, views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Shared

// View




/**
 * The product slug is used to fetch product data for the layout.
 */ const PRODUCT_SLUG = "waypoint";
/**
 * The baseUrl is used to generate
 * breadcrumb links, sidebar nav levels, and version switcher links.
 */ const BASE_URL = "/waypoint/api-docs";
/**
 * The path to read from when running local preview in the context
 * of the `hashicorp/waypoint` repository.
 */ const TARGET_LOCAL_FILE = "../../pkg/server/gen/server.swagger.json";
/**
 * The Waypoint API docs have circular references.
 * We manually try to deal with those. This is a band-aid solution,
 * it seems to have unintended side-effects when applied to other
 * products' API docs, and almost certainly merits further investigation.
 *
 * Asana task:
 * https://app.asana.com/0/1202097197789424/1203989531295664/f
 */ const MAY_HAVE_CIRCULAR_REFERENCES = true;
/**
 * Version data is hard-coded for now. In the future, we could fetch
 * version data from elsewhere, as we do for `/hcp/api-docs/packer`.
 */ function getVersionData() {
    const targetFile = (0,lib_env_checks__WEBPACK_IMPORTED_MODULE_0__.isDeployPreview)(PRODUCT_SLUG) ? TARGET_LOCAL_FILE : {
        owner: "hashicorp",
        repo: "waypoint",
        path: "pkg/server/gen/server.swagger.json",
        ref: "stable-website"
    };
    return [
        {
            /**
			 * Note this is a `versionId` placeholder. Since it isn't date-based,
			 * currently we won't render a dedicated versioned URL for it.
			 *
			 * In the future, we could support version formats other than date-based.
			 * That might better align with versioned API docs for Waypoint.
			 */ versionId: "latest",
            targetFile
        }
    ];
}
/**
 * Get static paths, using `versionData` fetched from GitHub.
 */ const getStaticPaths = async ()=>{
    // Use the hard-coded version data
    const versionData = await getVersionData();
    return await (0,views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getApiDocsStaticPaths */ .X)({
        productSlug: PRODUCT_SLUG,
        versionData,
        mayHaveCircularReferences: MAY_HAVE_CIRCULAR_REFERENCES
    });
};
/**
 * Get static props, using `versionData` fetched from GitHub.
 *
 * We need all version data for the version selector,
 * and of course we need specific data for the current version.
 */ const getStaticProps = async ({ params  })=>{
    // Use the hard-coded version data
    const versionData = await getVersionData();
    // Return static props
    return await (0,views_api_docs_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getApiDocsStaticProps */ .q)({
        productSlug: PRODUCT_SLUG,
        baseUrl: BASE_URL,
        pathParts: params.page,
        versionData,
        mayHaveCircularReferences: MAY_HAVE_CIRCULAR_REFERENCES,
        buildCustomSidebarNavDataLevels: ({ productData  })=>{
            return [
                (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_4__/* .generateTopLevelSidebarNavData */ .Vz)(productData.name),
                (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_4__/* .generateProductLandingSidebarNavData */ ._G)(productData),
                {
                    backToLinkProps: {
                        text: `${productData.name} Home`,
                        href: `/${productData.slug}`
                    },
                    visuallyHideTitle: true,
                    title: "API",
                    levelButtonProps: {
                        levelUpButtonText: `${productData.name} Home`
                    },
                    menuItems: [
                        {
                            title: "API",
                            fullPath: "/waypoint/api-docs",
                            theme: productData.slug
                        }
                    ]
                }
            ];
        },
        buildCustomBreadcrumbs: ({ productData , versionId  })=>{
            return (0,views_api_docs_view_server_get_api_docs_static_props_utils__WEBPACK_IMPORTED_MODULE_3__/* .buildApiDocsBreadcrumbs */ .Kf)({
                productData,
                apiDocs: {
                    name: "API",
                    url: BASE_URL
                },
                /**
				 * Note: We intentionally omit `serviceData`, to avoid an extra item
				 * in the breadcrumb, as unlike `/hcp/api-docs/packer`
				 * we don't want to include a link with the service name.
				 */ versionId
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_api_docs_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12544:
/***/ ((module) => {

module.exports = require("@apidevtools/json-schema-ref-parser");

/***/ }),

/***/ 16142:
/***/ ((module) => {

module.exports = require("@octokit/core");

/***/ }),

/***/ 48827:
/***/ ((module) => {

module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@reach/dialog");

/***/ }),

/***/ 76278:
/***/ ((module) => {

module.exports = require("@react-aria/utils");

/***/ }),

/***/ 18910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 38970:
/***/ ((module) => {

module.exports = require("algoliasearch");

/***/ }),

/***/ 86110:
/***/ ((module) => {

module.exports = require("change-case");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 10950:
/***/ ((module) => {

module.exports = require("extend");

/***/ }),

/***/ 79316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 22493:
/***/ ((module) => {

module.exports = require("hast-util-to-string");

/***/ }),

/***/ 93715:
/***/ ((module) => {

module.exports = require("is-buffer");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 52591:
/***/ ((module) => {

module.exports = require("moize");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 70276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 39369:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 79103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 48922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 19785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 62555:
/***/ ((module) => {

module.exports = require("refractor");

/***/ }),

/***/ 64545:
/***/ ((module) => {

module.exports = require("rehype-stringify");

/***/ }),

/***/ 50934:
/***/ ((module) => {

module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 84269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 87586:
/***/ ((module) => {

module.exports = import("decode-named-character-reference");;

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 90684:
/***/ ((module) => {

module.exports = import("mdast-util-mdx");;

/***/ }),

/***/ 19282:
/***/ ((module) => {

module.exports = import("mdast-util-phrasing");;

/***/ }),

/***/ 23985:
/***/ ((module) => {

module.exports = import("micromark-core-commonmark");;

/***/ }),

/***/ 95723:
/***/ ((module) => {

module.exports = import("micromark-extension-mdxjs");;

/***/ }),

/***/ 84678:
/***/ ((module) => {

module.exports = import("micromark-factory-space");;

/***/ }),

/***/ 60718:
/***/ ((module) => {

module.exports = import("micromark-util-character");;

/***/ }),

/***/ 43471:
/***/ ((module) => {

module.exports = import("micromark-util-chunked");;

/***/ }),

/***/ 36243:
/***/ ((module) => {

module.exports = import("micromark-util-combine-extensions");;

/***/ }),

/***/ 62687:
/***/ ((module) => {

module.exports = import("micromark-util-decode-numeric-character-reference");;

/***/ }),

/***/ 22732:
/***/ ((module) => {

module.exports = import("micromark-util-decode-string");;

/***/ }),

/***/ 96997:
/***/ ((module) => {

module.exports = import("micromark-util-normalize-identifier");;

/***/ }),

/***/ 45566:
/***/ ((module) => {

module.exports = import("micromark-util-resolve-all");;

/***/ }),

/***/ 94980:
/***/ ((module) => {

module.exports = import("micromark-util-subtokenize");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 89521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 19832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 60234:
/***/ ((module) => {

module.exports = import("unist-util-is");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,3272,7791,7184,9146,3643,2067,453,7708,8942,1960,8835,5675,998,5102,3236,3613,3058,7033,5703,1505,5623,9670,4884,543,2549,2676,6692], () => (__webpack_exec__(14169)));
module.exports = __webpack_exports__;

})();