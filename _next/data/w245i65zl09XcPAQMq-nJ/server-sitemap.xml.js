"use strict";
(() => {
var exports = {};
exports.id = 7773;
exports.ids = [7773];
exports.modules = {

/***/ 46149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jr": () => (/* binding */ formatCollection),
/* harmony export */   "vD": () => (/* binding */ formatProductUsed)
/* harmony export */ });
/* unused harmony export formatToTutorialLite */
/* harmony import */ var _tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38502);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
function formatCollection(collection) {
    const { id , slug , name , short_name , description , icon , theme , ordered , level , category , tutorials  } = collection;
    return {
        id,
        slug,
        name,
        shortName: short_name,
        description,
        icon,
        theme,
        ordered,
        level,
        category: category || undefined,
        tutorials: tutorials.map(formatToTutorialLite)
    };
}
function formatToTutorialLite(item) {
    const { id , name , slug , description , read_time , edition , products_used , default_collection  } = item.tutorial;
    const productsUsed = products_used.map(formatProductUsed);
    const video = (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatVideo */ .Oz)(item.tutorial);
    const handsOnLab = (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatHandsOnLab */ .Lf)(item.tutorial);
    const formattedVariant = item.tutorial.variants?.length > 0 ? (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatVariant */ .yf)(item.tutorial.variants[0]) : undefined;
    return {
        id,
        name,
        slug,
        description,
        readTime: read_time,
        edition: edition,
        productsUsed,
        video,
        handsOnLab,
        defaultContext: (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatToCollectionLite */ .je)(default_collection),
        variant: formattedVariant
    };
}
function formatProductUsed(productUsed) {
    const { product , tutorial_id , is_primary , is_beta , min_version , max_version  } = productUsed;
    const { id , slug , name , docs_url , description  } = product;
    return {
        product: {
            id,
            slug,
            name,
            docsUrl: docs_url,
            description
        },
        tutorial: tutorial_id,
        isPrimary: is_primary,
        isBeta: is_beta,
        minVersion: min_version || undefined,
        maxVersion: max_version || undefined
    };
}


/***/ }),

/***/ 73450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lg": () => (/* binding */ getAllCollections),
  "_N": () => (/* binding */ getCollection),
  "bG": () => (/* binding */ getCollections),
  "Jz": () => (/* binding */ getCollectionsBySection),
  "cO": () => (/* binding */ getNextCollectionInSidebar)
});

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./src/lib/learn-client/api/utils/index.ts + 1 modules
var utils = __webpack_require__(65394);
// EXTERNAL MODULE: ./src/lib/learn-client/types.ts
var types = __webpack_require__(64785);
// EXTERNAL MODULE: ./src/lib/learn-client/index.ts
var learn_client = __webpack_require__(32235);
;// CONCATENATED MODULE: ./src/lib/learn-client/api/collection/fetch-product-collections.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
// /products/:identifier/collections
const PRODUCT_COLLECTION_API_ROUTE = (identifier)=>`/products/${identifier}/collections`;
/**
 * Returns all collections associated with a product.
 * Collections will be product associated if they have at least
 * one tutorial whose primary product (first in frontmatter array)
 * matches this product slug
 *
 * Optional query params will return collections
 * sorted according to the category sidebar sort (which automatically
 * includes filtering for theme
 */ async function fetchAllCollectionsByProduct(product) {
    const baseUrl = PRODUCT_COLLECTION_API_ROUTE(product.slug);
    let route = baseUrl;
    if (product.sidebarSort) {
        const params = new URLSearchParams([
            [
                "topLevelCategorySort",
                "true"
            ],
            [
                "theme",
                product.slug
            ]
        ]);
        route = baseUrl + `?${params.toString()}`;
    }
    const getProductCollectionsRes = await (0,learn_client/* get */.U2)(route);
    if (getProductCollectionsRes.ok) {
        const res = await getProductCollectionsRes.json();
        return res.result;
    }
    const error = (0,learn_client/* toError */.KC)(getProductCollectionsRes);
    throw error;
}

// EXTERNAL MODULE: ./src/lib/learn-client/api/collection/formatting.ts
var formatting = __webpack_require__(46149);
// EXTERNAL MODULE: ./src/lib/learn-client/api/tutorial/formatting.ts
var tutorial_formatting = __webpack_require__(38502);
;// CONCATENATED MODULE: ./src/lib/learn-client/api/collection/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const COLLECTION_API_ROUTE = "/collections";
// getCollection
async function getCollection(idOrSlug) {
    const identifier = (0,utils/* formatIdentifier */._q)(idOrSlug);
    // /collections/:id
    const route = external_path_default().join(COLLECTION_API_ROUTE, identifier);
    const getCollectionRes = await (0,learn_client/* get */.U2)(route);
    if (getCollectionRes.ok) {
        const res = await getCollectionRes.json();
        return (0,formatting/* formatCollection */.Jr)(res.result);
    }
    // This is handled by tutorial or collection template to render 404 page
    if (getCollectionRes.status === 404) {
        console.error("Learn Api Client: 404 — Collection not found");
        return null;
    }
    const error = (0,learn_client/* toError */.KC)(getCollectionRes);
    throw error;
}
// getCollections
async function getCollections(idsOrSlugs) {
    const queryStr = (0,utils/* formatBatchQueryStr */.iy)(idsOrSlugs);
    // /collections?ids|slugs=....
    const route = COLLECTION_API_ROUTE + queryStr;
    const getCollectionsRes = await (0,learn_client/* get */.U2)(route);
    if (getCollectionsRes.ok) {
        const res = await getCollectionsRes.json();
        return res.result.map(formatting/* formatCollection */.Jr);
    }
    const error = (0,learn_client/* toError */.KC)(getCollectionsRes);
    throw error;
}
/**
 * getAllCollections accepts a limit or product option.
 * The limit option allows you to specify how many collections to fetch.
 * The product option returns all collections associated with that product.
 * If no options are passed, all collections are fetched.
 */ async function getAllCollections(options) {
    let collections = [];
    // check if the product option is valid, i.e. not 'cloud' or 'hashicorp'
    if (options?.product && (0,types/* themeIsProduct */.ig)(options.product.slug)) {
        const allCollections = await fetchAllCollectionsByProduct(options.product);
        collections = [
            ...allCollections
        ];
    } else {
        const limit = options?.limit?.toString();
        const recurse = Boolean(!limit);
        // errors handled by the `fetchAll` function
        const allCollections1 = await (0,utils/* fetchAll */.Qd)({
            baseUrl: COLLECTION_API_ROUTE,
            recurse,
            limit
        });
        collections = [
            ...allCollections1
        ];
    }
    return collections.map(formatting/* formatCollection */.Jr);
}
async function getNextCollectionInSidebar({ product , after  }) {
    const baseUrl = PRODUCT_COLLECTION_API_ROUTE(product);
    const params = new URLSearchParams({
        topLevelCategorySort: "true",
        theme: product,
        limit: "1",
        startKey: after
    });
    const route = baseUrl + `?${params.toString()}`;
    const nextCollectionRes = await (0,learn_client/* get */.U2)(route);
    if (nextCollectionRes.ok) {
        const res = await nextCollectionRes.json();
        if (res.result.length === 0) {
            return null // this means its the last collection in the sidebar
            ;
        }
        const formattedCollection = (0,tutorial_formatting/* formatToCollectionLite */.je)(res.result[0]);
        return formattedCollection;
    }
}
/**
 * Returns all collections within a particular 'section'
 * The sections map from the parent folder in the
 * tutorials repository. `/content/collections/waypoint/some-collection`
 * would have a section of 'waypoint'. This allows us to fetch non-product
 * associated content such as 'onboarding' and 'well-architected-framework'
 */ async function getCollectionsBySection(section) {
    const route = COLLECTION_API_ROUTE + `?section=${section}`;
    const getSectionCollections = await (0,learn_client/* get */.U2)(route);
    if (getSectionCollections.ok) {
        const res = await getSectionCollections.json();
        if (res.result.length === 0) {
            console.warn(`No collections found for section query: ${section}`);
        }
        return res.result.map(formatting/* formatCollection */.Jr);
    }
    const error = (0,learn_client/* toError */.KC)(getSectionCollections);
    throw error;
}


/***/ }),

/***/ 38502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lf": () => (/* binding */ formatHandsOnLab),
/* harmony export */   "Oz": () => (/* binding */ formatVideo),
/* harmony export */   "je": () => (/* binding */ formatToCollectionLite),
/* harmony export */   "ri": () => (/* binding */ formatTutorialData),
/* harmony export */   "yf": () => (/* binding */ formatVariant)
/* harmony export */ });
/* harmony import */ var _collection_formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46149);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * This function handles two types of return tutorial data from the API.
 * For getTutorials and getAllTutorials, the API returns CollectionLite
 * for featured_collections. But with getTutorial, we need featured_collections
 * to be the full Collection type (with tutorials).
 *
 * This function returns either:
 * - Tutorial, with featuredCollections: CollectionLite
 * - or TutorialFullCollectionCtx, with featuredCollections: Collection
 */ function formatTutorialData(tutorial) {
    const { id , slug , name , description , content , default_collection_id , featured_collections , read_time , edition , products_used , variants  } = tutorial;
    const productsUsed = products_used.map(_collection_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatProductUsed */ .vD);
    const video = formatVideo(tutorial);
    const handsOnLab = formatHandsOnLab(tutorial);
    const collectionCtx = formatCollectionCtx(featured_collections, default_collection_id);
    // We only accept a single variant currently, so we take the first array item
    // The learn-api-content-sync should prevent multiple variants from syncing into
    // the database, this is an extra protection
    const formattedVariant = variants?.length > 0 ? formatVariant(variants[0]) : undefined;
    return {
        id,
        slug,
        name,
        description,
        content,
        collectionCtx,
        productsUsed,
        readTime: read_time,
        video,
        handsOnLab,
        edition: edition,
        variant: formattedVariant
    };
}
function formatToCollectionLite(collection) {
    const { id , name , slug , short_name , level , theme  } = collection;
    return {
        id,
        name,
        slug,
        shortName: short_name,
        level,
        theme
    };
}
function formatCollectionCtx(featuredCollections, defaultCollectionId) {
    let featuredIn;
    const defaultCollection = featuredCollections.find(({ id  })=>id === defaultCollectionId);
    // assuming if the first collection has tutorials, were dealing with full Collection
    if ("tutorials" in featuredCollections[0]) {
        featuredIn = featuredCollections.map(_collection_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatCollection */ .Jr);
    } else {
        featuredIn = featuredCollections.map(formatToCollectionLite);
    }
    const collectionCtx = {
        default: formatToCollectionLite(defaultCollection),
        featuredIn
    };
    return collectionCtx;
}
function formatVideo({ video_id , video_host , video_inline  }) {
    let video = undefined;
    if (video_id) {
        video = {
            id: video_id,
            videoHost: video_host,
            videoInline: video_inline
        };
    }
    return video;
}
function formatHandsOnLab({ hands_on_lab_id , hands_on_lab_provider  }) {
    let handsOnLab = undefined;
    if (hands_on_lab_id) {
        handsOnLab = {
            id: hands_on_lab_id,
            provider: hands_on_lab_provider
        };
    }
    return handsOnLab;
}
function formatVariant(variant) {
    const { options , ...rest } = variant;
    return {
        ...rest,
        options: options.map(({ display_order , ...rest })=>({
                displayOrder: display_order,
                ...rest
            }))
    };
}


/***/ }),

/***/ 93560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YE": () => (/* binding */ TUTORIAL_API_ROUTE),
  "BL": () => (/* binding */ getAllTutorials),
  "ck": () => (/* binding */ getTutorial),
  "mm": () => (/* binding */ getTutorials)
});

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./src/lib/learn-client/index.ts
var learn_client = __webpack_require__(32235);
// EXTERNAL MODULE: ./src/lib/learn-client/api/utils/index.ts + 1 modules
var utils = __webpack_require__(65394);
// EXTERNAL MODULE: ./src/lib/learn-client/api/tutorial/formatting.ts
var formatting = __webpack_require__(38502);
;// CONCATENATED MODULE: ./src/lib/learn-client/api/tutorial/augment-tutorial.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



// Featured Collections are augmented to the base tutorial
async function augmentTutorial(tutorial) {
    const featured_collections = await getFeaturedCollections(tutorial.id);
    const tutorialClone = Object.assign({}, tutorial);
    delete tutorialClone.featured_collections;
    return {
        ...tutorialClone,
        featured_collections
    };
}
// featured collections are accessed via another route
async function getFeaturedCollections(idOrSlug) {
    const identifier = (0,utils/* formatIdentifier */._q)(idOrSlug);
    // /tutorials/:id/collections
    const route = external_path_default().join(TUTORIAL_API_ROUTE, `${identifier}/collections`);
    const featuredCollectionsRes = await (0,learn_client/* get */.U2)(route);
    if (featuredCollectionsRes.ok) {
        const res = await featuredCollectionsRes.json();
        return res.result;
    }
    const error = await (0,learn_client/* toError */.KC)(featuredCollectionsRes);
    throw error;
}

;// CONCATENATED MODULE: ./src/lib/learn-client/api/tutorial/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const TUTORIAL_API_ROUTE = "/tutorials";
async function getTutorial(idOrSlug) {
    const identifier = (0,utils/* formatIdentifier */._q)(idOrSlug);
    // /tutorials/:id
    const route = external_path_default().join(TUTORIAL_API_ROUTE, identifier);
    const getTutorialRes = await (0,learn_client/* get */.U2)(route);
    if (getTutorialRes.ok) {
        const res = await getTutorialRes.json();
        const augmentedData = await augmentTutorial(res.result) // additional Api call here
        ;
        return (0,formatting/* formatTutorialData */.ri)(augmentedData);
    }
    // This is handled by tutorial template /pages/tutorials/[...slug] to render 404 page
    if (getTutorialRes.status === 404) {
        console.error("Learn Api Client: 404 — Tutorial not found");
        return null;
    }
    const error = await (0,learn_client/* toError */.KC)(getTutorialRes);
    throw error;
}
async function getTutorials(idsOrSlugs, withContent) {
    const queryStr = (0,utils/* formatBatchQueryStr */.iy)(idsOrSlugs, withContent);
    const route = external_path_default().join(TUTORIAL_API_ROUTE, queryStr);
    const getTutorialsRes = await (0,learn_client/* get */.U2)(route);
    if (getTutorialsRes.ok) {
        const res = await getTutorialsRes.json();
        return res.result.map(formatting/* formatTutorialData */.ri);
    }
    const error = await (0,learn_client/* toError */.KC)(getTutorialsRes);
    throw error;
}
// getAllTutorials
// if a limit is not passed, all tutorials are fetched
async function getAllTutorials(options) {
    let result = [];
    const limit = options?.limit?.toString();
    const recurse = Boolean(!limit);
    // errors handled by the `fetchAll` function
    const allTutorials = await (0,utils/* fetchAll */.Qd)({
        baseUrl: TUTORIAL_API_ROUTE,
        recurse,
        limit,
        fullContent: options?.fullContent
    });
    if (options?.slugsOnly) {
        result = allTutorials.map(({ slug , default_collection  })=>({
                slug,
                collection_slug: default_collection.slug
            }));
    } else {
        return allTutorials.map(formatting/* formatTutorialData */.ri);
    }
    return result;
}


/***/ }),

/***/ 65394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qd": () => (/* reexport */ fetchAll),
  "iy": () => (/* binding */ formatBatchQueryStr),
  "_q": () => (/* binding */ formatIdentifier)
});

// EXTERNAL MODULE: external "validator/lib/isUUID"
var isUUID_ = __webpack_require__(57026);
var isUUID_default = /*#__PURE__*/__webpack_require__.n(isUUID_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./src/lib/learn-client/index.ts
var learn_client = __webpack_require__(32235);
;// CONCATENATED MODULE: ./src/lib/learn-client/api/utils/fetch-all.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 *  Based off content-sync imp --> https://github.com/hashicorp/learn-api-content-sync/blob/main/util/api-client.js#L77
 *
 *  By detault, this function will recursively fetch all tutorials or collections from the db
 *  If you don't want all the tutorials, pass `recurse: false` and a specified limit.
 *  The baseUrl option specifies which endpoint (either collections or tutorials) to hit
 **/ const MAX_LIMIT = "100" // Defaults to API max
;
async function fetchAll({ baseUrl , recurse =true , limit =MAX_LIMIT , fullContent =false , after , fetchedTutorials  }) {
    // Set the base array if it's the first call
    if (typeof fetchedTutorials === "undefined") {
        fetchedTutorials = [];
    }
    const response = await fetchTutorialsOrCollections(baseUrl, limit, after, fullContent);
    if (response.ok) {
        const data = await response.json();
        const allTutorials = [
            ...fetchedTutorials,
            ...data.result
        ];
        /*
		 ** If recurse is false, we only want the # of tuts specific by the limit.
		 ** If there's less than 100 tutorials fetched (less than the max limit),
		 ** that means that we've fetched everything.
		 */ if (!recurse || data.result.length < Number(MAX_LIMIT)) {
            return allTutorials;
        }
        // Otherwise, recurse to get the next batch of tutorials
        return fetchAll({
            baseUrl,
            recurse: true,
            limit,
            // The last ID
            after: data.result[data.result.length - 1].id,
            // Pass the accumulated tutorials
            fetchedTutorials: allTutorials,
            fullContent
        });
    }
}
async function fetchTutorialsOrCollections(baseRoute, limit, after, full) {
    const params = new URLSearchParams({
        limit
    });
    if (after) {
        params.append("after", after);
    }
    if (full) {
        params.append("full", "1");
    }
    const queryStr = `?${params.toString()}`;
    const route = external_path_default().join(baseRoute, queryStr);
    const response = await (0,learn_client/* get */.U2)(route);
    if (response.ok) {
        return response;
    }
    const error = await (0,learn_client/* toError */.KC)(response);
    throw error;
}

;// CONCATENATED MODULE: ./src/lib/learn-client/api/utils/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
function formatSlug(slug) {
    return slug.replace("/", "|");
}
// if the identifier is a slug, we need to format for the request to replace slashes (/) with pipes (|)
function formatIdentifier(idOrSlug) {
    let identifier = idOrSlug;
    if (!isUUID_default()(identifier)) {
        identifier = formatSlug(idOrSlug);
    }
    return identifier;
}
function formatBatchQueryStr(idsOrSlugs, withContent) {
    const params = new URLSearchParams();
    const identifiers = idsOrSlugs.toString();
    if (idsOrSlugs.length > 0) {
        // Assuming here that if the first item in the array is a uuid, they are all uuids
        if (isUUID_default()(idsOrSlugs[0])) {
            params.append("ids", identifiers);
        } else {
            params.append("slugs", identifiers);
        }
    }
    if (withContent) {
        params.append("full", "1");
    }
    return `?${params.toString()}`;
}
// Barrel exports. This function can be imported from /utils



/***/ }),

/***/ 66788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "df": () => (/* reexport */ allDocsFields),
  "aT": () => (/* reexport */ allTutorialsFields)
});

// UNUSED EXPORTS: determinePriority, makeSitemapField

;// CONCATENATED MODULE: ./src/lib/sitemap/helpers.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 *
 * @param slug
 * @returns 1 - 0.7 depending on slug depth in relation to a product's base path
 *
 * See XML Tag Definitions: https://www.sitemaps.org/protocol.html
 */ const determinePriority = (slug)=>{
    const slugDepth = slug.split("/").length;
    switch(slugDepth){
        case 1:
            return 1;
        case 2:
            return 0.9;
        case 3:
            return 0.8;
        default:
            return 0.7;
    }
};
const makeSitemapField = ({ slug , lastmodDate , priority , changefreq  })=>{
    return {
        loc: new URL(slug, "https://developer.hashicorp.com").toString(),
        lastmod: lastmodDate ?? new Date(Date.now()).toISOString(),
        priority: priority ?? determinePriority(slug),
        changefreq: changefreq ?? "daily"
    };
};

;// CONCATENATED MODULE: ./src/lib/sitemap/docs-content-fields.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
async function allDocsFields() {
    const getDocsPaths = await fetch(`${"https://content.hashicorp.com"}/api/all-docs-paths`);
    const { result: docsResult  } = await getDocsPaths.json();
    return docsResult.map((page)=>makeSitemapField({
            slug: `${page.path}`,
            lastmodDate: page.created_at
        }));
}

// EXTERNAL MODULE: ./src/lib/learn-client/api/collection/index.ts + 1 modules
var collection = __webpack_require__(73450);
// EXTERNAL MODULE: ./src/lib/learn-client/types.ts
var types = __webpack_require__(64785);
// EXTERNAL MODULE: ./src/lib/products.ts
var products = __webpack_require__(14684);
// EXTERNAL MODULE: ./src/pages/api/tutorials-map.ts
var tutorials_map = __webpack_require__(40750);
// EXTERNAL MODULE: ./src/views/collection-view/helpers/index.ts + 3 modules
var helpers = __webpack_require__(28493);
;// CONCATENATED MODULE: ./src/lib/sitemap/tutorials-content-fields.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





function getTutorialLandingPaths() {
    const activeSlugs = products/* activeProductSlugs.map */.KD.map((productSlug)=>`${productSlug}/tutorials`);
    const sectionOptionsWithLandingPage = Object.values(types/* SectionOption */.FS).filter((option)=>option !== types/* SectionOption.onboarding */.FS.onboarding);
    const sectionOptions = sectionOptionsWithLandingPage.map((slug)=>`${slug}`);
    return [
        ...activeSlugs,
        ...sectionOptions
    ];
}
async function getCollectionPaths() {
    const allCollections = await (0,collection/* getAllCollections */.Lg)();
    return allCollections.map((collection)=>{
        // build collection paths
        return (0,helpers/* getCollectionSlug */.I_)(collection.slug);
    });
}
async function allTutorialsFields() {
    const landingSlugs = getTutorialLandingPaths();
    const collectionSlugs = await getCollectionPaths();
    const tutorialSlugs = Object.values(await (0,tutorials_map/* generateTutorialMap */.S)());
    return [
        ...landingSlugs,
        ...collectionSlugs,
        ...tutorialSlugs
    ].map((slug)=>makeSitemapField({
            slug
        }));
}

;// CONCATENATED MODULE: ./src/lib/sitemap/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





/***/ }),

/***/ 40750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ generateTutorialMap)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48010);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28493);
/* harmony import */ var lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93560);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


// 1 hour
const MAP_MAX_AGE_IN_SECONDS = (/* unused pure expression or super */ null && (60 * 60 * 60));
/**
 * This API caches a tutorial-map blob for the tutorial rewrites
 * remark plugin - lib/remark-plugins/rewrite-tutorial-links.
 * This ensures that calls to `getAllTutorials` are limited
 * for ISR generated tutorial views
 */ async function tutorialsMapHandler(req, res) {
    try {
        const mapData = await generateTutorialMap();
        if (Object.keys(mapData).length > 0) {
            res.setHeader("cache-control", `s-maxage=${MAP_MAX_AGE_IN_SECONDS}`);
            res.status(StatusCodes.OK).json(mapData);
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "Failed to generate tutorial map"
            });
        }
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Server error: unable to generate tutorial map"
        });
    }
}
/**
 * This function creates a map of 'database-slug': 'dev-dot/path'
 */ async function generateTutorialMap() {
    const allTutorials = await (0,lib_learn_client_api_tutorial__WEBPACK_IMPORTED_MODULE_2__/* .getAllTutorials */ .BL)({
        fullContent: false,
        slugsOnly: true
    });
    const mapItems = allTutorials.map((t)=>{
        const oldPath = t.slug;
        const newPath = (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_1__/* .getTutorialSlug */ .Jc)(t.slug, t.collection_slug);
        return [
            oldPath,
            newPath
        ];
    });
    return Object.fromEntries(mapItems);
}


/***/ }),

/***/ 80509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sitemap),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84279);
/* harmony import */ var lib_sitemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66788);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_0__]);
next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

const getServerSideProps = async (ctx)=>{
    try {
        // returns an array of docs content sitemap fields per slug
        const docsFields = await (0,lib_sitemap__WEBPACK_IMPORTED_MODULE_1__/* .allDocsFields */ .df)();
        // returns an array of tutorials content sitemap fields per slug
        const tutorialsFields = await (0,lib_sitemap__WEBPACK_IMPORTED_MODULE_1__/* .allTutorialsFields */ .aT)();
        return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_0__.getServerSideSitemap)(ctx, [
            ...docsFields,
            ...tutorialsFields
        ]);
    } catch (error) {
        throw new Error("Error generating server-sitemap.xml", error);
    }
};
// Default export to prevent next.js errors
function Sitemap() {
    return null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 48010:
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 57026:
/***/ ((module) => {

module.exports = require("validator/lib/isUUID");

/***/ }),

/***/ 84279:
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,3272,3225,5703,131], () => (__webpack_exec__(80509)));
module.exports = __webpack_exports__;

})();