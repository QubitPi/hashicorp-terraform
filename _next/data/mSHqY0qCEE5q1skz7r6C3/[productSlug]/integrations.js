(() => {
var exports = {};
exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 43410:
/***/ ((module) => {

// Exports
module.exports = {
	"badgeList": "badge-list_badgeList__c8eh4",
	"badge": "badge-list_badge__l2QZL"
};


/***/ }),

/***/ 1154:
/***/ ((module) => {

// Exports
module.exports = {
	"option": "multi-select_option___QUfx"
};


/***/ }),

/***/ 62839:
/***/ ((module) => {

// Exports
module.exports = {
	"pagination": "pagination_pagination__VpZZ_ hds-typography-body-100",
	"info": "pagination_info__R3iW2 hds-typography-body-100",
	"nav": "pagination_nav__jw_pU hds-typography-body-100",
	"page-list": "pagination_page-list__xp8NA",
	"page-item": "pagination_page-item__grIO1",
	"is-selected": "pagination_is-selected__vFIY4",
	"control": "pagination_control__r2q9o g-focus-ring-from-box-shadow hds-typography-body-100",
	"active": "pagination_active__B8NXm",
	"ellipsis": "pagination_ellipsis__29zhh",
	"arrow": "pagination_arrow__Z9vG0",
	"prev": "pagination_prev__fvXvD",
	"next": "pagination_next__dAXXO",
	"label": "pagination_label__EgciG",
	"size-selector": "pagination_size-selector__R29I8 hds-typography-body-100",
	"select": "pagination_select__LpQQa"
};


/***/ }),

/***/ 99498:
/***/ ((module) => {

// Exports
module.exports = {
	"cardPadding": "branded-header-card_cardPadding__1ndPc",
	"heading": "branded-header-card_heading__H079l hds-typography-display-400",
	"description": "branded-header-card_description__toyYc hds-typography-body-200"
};


/***/ }),

/***/ 77704:
/***/ ((module) => {

// Exports
module.exports = {
	"integrationCard": "style_integrationCard__UvzD4",
	"cardContent": "style_cardContent__IsmDw",
	"left": "style_left__O8Eif",
	"nameVersionWrapper": "style_nameVersionWrapper__OW4V1",
	"right": "style_right__NSwHM",
	"badgeList": "style_badgeList__BIe_1",
	"viewDetails": "style_viewDetails___CcMQ",
	"version": "style_version__OmCck hds-typography-body-200",
	"heading": "style_heading__hnmEB hds-typography-body-300",
	"organization": "style_organization__ZKuG_ hds-typography-body-100",
	"body": "style_body__hutS7 hds-typography-body-200",
	"noResultsWrapper": "style_noResultsWrapper___49l9",
	"noResultsTitle": "style_noResultsTitle__1KA_V hds-typography-body-300",
	"noResultsDescription": "style_noResultsDescription__YPvrO hds-typography-body-300",
	"noResultsButtonWrapper": "style_noResultsButtonWrapper__oavCF"
};


/***/ }),

/***/ 77361:
/***/ ((module) => {

// Exports
module.exports = {
	"paginatedIntegrationsList": "style_paginatedIntegrationsList__wIltf",
	"paginatorWrapper": "style_paginatorWrapper__t2yDz"
};


/***/ }),

/***/ 63016:
/***/ ((module) => {

// Exports
module.exports = {
	"filterOptions": "style_filterOptions__3_F_r",
	"tablet_up": "style_tablet_up__Il7x5 g-hide-on-mobile",
	"mobile_only": "style_mobile_only__8zxU1 g-hide-on-tablet g-hide-on-desktop",
	"results": "style_results__9Scq_ hds-typography-body-100 hds-font-weight-medium",
	"filterInfo": "style_filterInfo__OsSGT",
	"clearFiltersButton": "style_clearFiltersButton__rJ7JZ",
	"noFilters": "style_noFilters__5dU3Q hds-typography-body-200 hds-font-weight-semibold",
	"header": "style_header__tvJxw",
	"filterInput": "style_filterInput__Y1vgS",
	"selectStack": "style_selectStack__w9_fw",
	"option": "style_option__gqz__",
	"check": "style_check__o9IHU",
	"exitIcon": "style_exitIcon__DO9vc g-focus-ring-from-box-shadow",
	"justifyEnd": "style_justifyEnd__h8SiQ",
	"row": "style_row__JTdOH",
	"row_fill": "style_row_fill__Z61cu",
	"mobileFilters": "style_mobileFilters__GH1_q",
	"optionsContainer": "style_optionsContainer__DTmJQ"
};


/***/ }),

/***/ 28617:
/***/ ((module) => {

// Exports
module.exports = {
	"searchList": "style_searchList__R0PU0",
	"integrationsLandingPage": "style_integrationsLandingPage__P9eTZ",
	"mainArea": "style_mainArea__mDSdD",
	"exitIcon": "style_exitIcon__nTpDN"
};


/***/ }),

/***/ 51455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BadgeList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42892);
/* harmony import */ var components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48418);
/* harmony import */ var _badge_list_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43410);
/* harmony import */ var _badge_list_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_badge_list_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




function BadgeList({ badges , className , size ="medium" , type ="filled"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_badge_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().badgeList), className),
        children: badges.map((badge)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: (_badge_list_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),
                children: badge.tooltip ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tooltip__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    label: badge.tooltip,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        icon: badge.icon,
                        text: badge.text,
                        color: badge.color,
                        type: type,
                        size: size
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    icon: badge.icon,
                    text: badge.text,
                    color: badge.color,
                    type: type,
                    size: size
                })
            }, badge.text);
        })
    });
}


/***/ }),

/***/ 46351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16557);
/* harmony import */ var components_form_field_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70005);
/* harmony import */ var _multi_select_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1154);
/* harmony import */ var _multi_select_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_multi_select_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



const MultiSelect = ({ text , options  })=>{
    // If there are no options, don't render the dropdown since it throws
    // when 0 children are passed.
    if (!options.length) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        closeOnRouteChangeStart: false,
        color: "secondary",
        text: text,
        children: options.map(({ id , label , onChange , selected  })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dropdown_disclosure__WEBPACK_IMPORTED_MODULE_1__/* .DropdownDisclosureListItem */ .kC, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_multi_select_module_css__WEBPACK_IMPORTED_MODULE_3___default().option),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxField */ .j, {
                        checked: selected,
                        id: id,
                        label: label,
                        labelFontWeight: "regular",
                        onChange: onChange
                    })
                })
            }, id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelect);


/***/ }),

/***/ 13702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/chevron-left-16.tsx
var chevron_left_16 = __webpack_require__(28695);
// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/chevron-right-16.tsx
var chevron_right_16 = __webpack_require__(38596);
// EXTERNAL MODULE: ./src/components/pagination/pagination.module.css
var pagination_module = __webpack_require__(62839);
var pagination_module_default = /*#__PURE__*/__webpack_require__.n(pagination_module);
;// CONCATENATED MODULE: ./src/components/pagination/helpers.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // accepts an array and returns a truncated array with interlaced "ellipsis"
// items, based on the current page
function generateTruncatedList(array, currentPage) {
    // do not truncate if there are 5 or fewer pages
    const bypass = array.length <= 5;
    if (bypass) {
        return array;
    }
    const isLeft = currentPage <= 3;
    const isRight = currentPage >= array.length - 2;
    // [1,2,3,4,...,99,100]
    if (isLeft) {
        return array.slice(0, 4)// @ts-expect-error - the output array is typed as (number | 'ellipsis')[]
        .concat("ellipsis").concat(array.slice(-2));
    }
    // [1,2,...,97,98,99,100]
    if (isRight) {
        return array.slice(0, 2)// @ts-expect-error - the output array is typed as (number | 'ellipsis')[]
        .concat("ellipsis").concat(array.slice(-4));
    }
    // [1,...3,4,5,...,100]
    return array.slice(0, 1).concat(// @ts-expect-error - the output array is typed as (number | 'ellipsis')[]
    "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis").concat(array.slice(-1));
}

;// CONCATENATED MODULE: ./src/components/pagination/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const PaginationContext = /*#__PURE__*/ (0,external_react_.createContext)({
    totalItems: 0,
    pageSize: 0,
    setPageSize: ()=>void 1,
    page: 1,
    setPage: ()=>void 1,
    totalPages: 0
});
const usePagination = ()=>(0,external_react_.useContext)(PaginationContext);
const Pagination = ({ totalItems , pageSize: _pageSize , page =1 , onPageChange =()=>void 1 , onPageSizeChange =()=>void 1 , children  })=>{
    if (typeof totalItems !== "number" || totalItems < 0) {
        throw new Error("Pagination: totalItems is required, but was not specified. Please try passing a positive value such as `103`.");
    }
    if (typeof _pageSize !== "number" || _pageSize < 1) {
        throw new Error("Pagination: pageSize is required, but was not specified. Please try passing a non-zero, positive value such as `10`.");
    }
    if (page < 1) {
        throw new Error("Pagination: page must be a non-zero, positive number. Please try passing a value such as `1`.");
    }
    const [pageSize, _setPageSize] = (0,external_react_.useState)(_pageSize);
    const setPage = (val)=>{
        if (val !== page) {
            onPageChange(val);
        }
    };
    const setPageSize = (val)=>{
        if (val !== pageSize) {
            _setPageSize(val);
            onPageSizeChange(val);
            // by default, updating page size will reset the page to "1"
            setPage(1);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(PaginationContext.Provider, {
        value: {
            totalItems,
            pageSize,
            setPageSize,
            page,
            setPage,
            totalPages: Math.ceil(totalItems / pageSize)
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (pagination_module_default()).pagination,
            children: children
        })
    });
};
const Info = ({ showTotalItems =true  })=>{
    const pagination = usePagination();
    const start = Math.min(pagination.page * pagination.pageSize - pagination.pageSize + 1, pagination.totalItems);
    const end = Math.min(pagination.page * pagination.pageSize, pagination.totalItems);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (pagination_module_default()).info,
        children: [
            start,
            " - ",
            end,
            showTotalItems ? ` of ${pagination.totalItems}` : null
        ]
    });
};
const generateNavItems = ({ currentPage , totalPages , type  })=>{
    const rawItems = Array.from({
        length: totalPages
    }, (_, i)=>i + 1);
    if (type === "numbered") {
        return rawItems;
    }
    if (type === "truncated") {
        return generateTruncatedList(rawItems, currentPage);
    }
    return [];
};
const Nav = ({ type ="compact"  })=>{
    const { page: currentPage , totalPages  } = usePagination();
    const items = (0,external_react_.useMemo)(()=>generateNavItems({
            currentPage,
            totalPages,
            type
        }), [
        currentPage,
        totalPages,
        type
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (pagination_module_default()).nav,
        "aria-label": "Pagination navigation",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonArrow, {
                type: type,
                direction: "prev"
            }),
            type !== "compact" && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (pagination_module_default())["page-list"],
                children: items.map((e, i)=>{
                    if (e === "ellipsis") {
                        // This key will be different on every re-render which is OK
                        const key = `${e}-${i}`;
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: external_classnames_default()((pagination_module_default())["page-item"]),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (pagination_module_default()).ellipsis,
                                children: "..."
                            })
                        }, key);
                    }
                    const isSelected = e === currentPage;
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: external_classnames_default()((pagination_module_default())["page-item"], {
                            [(pagination_module_default())["is-selected"]]: isSelected
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonNumber, {
                            page: e,
                            active: isSelected
                        })
                    }, e);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonArrow, {
                type: type,
                direction: "next"
            })
        ]
    });
};
const ButtonArrow = ({ type , direction  })=>{
    const pagination = usePagination();
    const { handleClick , icon , isDisabled , label , className  } = {
        next: {
            handleClick: ()=>{
                // clamp upper bound
                const nextIdx = Math.min(pagination.page + 1, pagination.totalPages);
                pagination.setPage(nextIdx);
            },
            icon: /*#__PURE__*/ jsx_runtime_.jsx(chevron_right_16/* IconChevronRight16 */.r, {}),
            label: "Next",
            isDisabled: pagination.page === pagination.totalPages || pagination.totalPages === 0,
            className: (pagination_module_default()).next
        },
        prev: {
            handleClick: ()=>{
                // clamp lower bound (0)
                const prevIdx = Math.max(pagination.page - 1, 0);
                pagination.setPage(prevIdx);
            },
            icon: /*#__PURE__*/ jsx_runtime_.jsx(chevron_left_16/* IconChevronLeft16 */.a, {}),
            label: "Previous",
            isDisabled: pagination.page === 1 || pagination.totalPages === 0,
            className: (pagination_module_default()).prev
        }
    }[direction];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: external_classnames_default()((pagination_module_default()).arrow, (pagination_module_default()).control, className),
        "aria-label": label,
        onClick: handleClick,
        disabled: isDisabled,
        children: [
            icon,
            type === "compact" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()((pagination_module_default()).label),
                children: label
            })
        ]
    });
};
const ButtonNumber = ({ page , active  })=>{
    const pagination = usePagination();
    const handleClick = ()=>{
        pagination.setPage(page);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: external_classnames_default()((pagination_module_default()).control, {
            [(pagination_module_default()).active]: active
        }),
        type: "button",
        onClick: handleClick,
        "aria-current": active ? "page" : undefined,
        children: page
    });
};
const SizeSelector = ({ sizes  })=>{
    const pagination = usePagination();
    const handleChange = (e)=>{
        const newPageSize = Number(e.target.value);
        pagination.setPageSize(newPageSize);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (pagination_module_default())["size-selector"],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
            className: (pagination_module_default()).label,
            children: [
                "Items per page",
                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                    className: (pagination_module_default()).select,
                    onChange: handleChange,
                    defaultValue: pagination.pageSize,
                    children: sizes.map((size)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: size,
                            children: size
                        }, size))
                })
            ]
        })
    });
};
/* harmony default export */ const pagination = (Object.assign(Pagination, {
    Info,
    Nav,
    SizeSelector
}));


/***/ }),

/***/ 34767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getIntegrationBadges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_archive_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31515);
/* harmony import */ var _hashicorp_flight_icons_svg_react_enterprise_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74580);
/* harmony import */ var _hashicorp_flight_icons_svg_react_handshake_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79326);
/* harmony import */ var _hashicorp_flight_icons_svg_react_hashicorp_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87164);
/* harmony import */ var _hashicorp_flight_icons_svg_react_rocket_16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64034);
/* harmony import */ var _hashicorp_flight_icons_svg_react_users_16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64190);
/* harmony import */ var _hashicorp_flight_icons_svg_react_wrench_16__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8390);
/* harmony import */ var _integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57193);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








// Converts an Integration object into an array of Badges to be used by our badge-list
function getIntegrationBadges(integration, tierFirst) {
    let tierBadge;
    switch(integration.tier){
        case _integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_8__/* .Tier.OFFICIAL */ .K0.OFFICIAL:
            tierBadge = {
                text: "Official",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_hashicorp_16__WEBPACK_IMPORTED_MODULE_4__/* .IconHashicorp16 */ .v, {}),
                tooltip: "Official integrations are owned and maintained by HashiCorp."
            };
            break;
        case _integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_8__/* .Tier.PARTNER */ .K0.PARTNER:
            tierBadge = {
                text: "Partner",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_handshake_16__WEBPACK_IMPORTED_MODULE_3__/* .IconHandshake16 */ .v, {}),
                tooltip: "Partner integrations are written, maintained, validated and published by third-party companies. To earn a partner provider badge the partner must participate in the HashiCorp Technology Partner Program."
            };
            break;
        case _integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_8__/* .Tier.COMMUNITY */ .K0.COMMUNITY:
            tierBadge = {
                text: "Community",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_users_16__WEBPACK_IMPORTED_MODULE_6__/* .IconUsers16 */ .T, {}),
                tooltip: "Community integrations are published by individual maintainers, groups of maintainers, or other members of the HashiCorp community."
            };
            break;
    }
    let typeBadge;
    if (integration.integration_type) {
        typeBadge = {
            text: integration.integration_type.name,
            tooltip: integration.integration_type.description
        };
    }
    return [
        // Be sure to keep this tierFirst entry here as the first item
        ...tierFirst ? [
            tierBadge
        ] : [],
        ...typeBadge ? [
            typeBadge
        ] : [],
        ...integration.flags.map((flag)=>{
            let icon = undefined;
            switch(flag.slug){
                case "builtin":
                    icon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_wrench_16__WEBPACK_IMPORTED_MODULE_7__/* .IconWrench16 */ .I, {});
                    break;
                case "hcp-ready":
                    icon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_rocket_16__WEBPACK_IMPORTED_MODULE_5__/* .IconRocket16 */ .n, {});
                    break;
                case "archived":
                    icon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_archive_16__WEBPACK_IMPORTED_MODULE_1__/* .IconArchive16 */ .W, {});
                    break;
                case "enterprise":
                    icon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_enterprise_16__WEBPACK_IMPORTED_MODULE_2__/* .IconEnterprise16 */ .e, {});
                    break;
            }
            return {
                text: flag.name,
                tooltip: flag.description,
                icon: icon
            };
        }),
        // Be sure to keep this tierFirst entry here as the last item
        ...tierFirst ? [] : [
            tierBadge
        ]
    ];
}


/***/ }),

/***/ 95655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ cachedGetProductData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52591);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moize__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function getProductData(product) {
    try {
        const productData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `src/data/${product}.json`), "utf-8"));
        return productData;
    } catch (e) {
        console.error(`[Error]: unable to fetch product data for ${product} — ${e.message}`);
        throw e;
    }
}
const cachedGetProductData = moize__WEBPACK_IMPORTED_MODULE_2___default()(getProductData);


/***/ }),

/***/ 20908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTypingDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Delay invoking a callback until after a user has finished typing.
 *
 * Note: the `useEffect` call in this function treats `debounceTime` and
 * `callback` as dependencies. If `callback` changes in any way between
 * renders, then the debounce timer will be reset.
 *
 * To more strictly control when the debounce timer is reset, the consumer
 * of this hook should `useCallback` when declaring `callback`.
 */ function useTypingDebounce(/**
	 * Function to call when typing has not happened in the last `debounceTime`.
	 */ callback, /**
	 * Time, in milliseconds, to wait to fire `callback` after typing stops.
	 */ debounceTime = 300) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const typingDebounce = setTimeout(()=>{
            callback();
        }, debounceTime);
        return ()=>clearTimeout(typingDebounce);
    }, [
        callback,
        debounceTime
    ]);
}


/***/ }),

/***/ 76660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ views_product_integrations_landing_server__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ views_product_integrations_landing_server__WEBPACK_IMPORTED_MODULE_1__.b)
/* harmony export */ });
/* harmony import */ var views_product_integrations_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81302);
/* harmony import */ var views_product_integrations_landing_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44717);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_product_integrations_landing__WEBPACK_IMPORTED_MODULE_0__]);
views_product_integrations_landing__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_product_integrations_landing__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ BrandedHeaderCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_branded_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25587);
/* harmony import */ var _branded_header_card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99498);
/* harmony import */ var _branded_header_card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_branded_header_card_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function BrandedHeaderCard({ heading , description , productSlug  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_branded_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        productSlug: productSlug,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_branded_header_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardPadding),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_branded_header_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),
                    children: heading
                }),
                description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_branded_header_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),
                    children: description
                }) : null
            ]
        })
    });
}


/***/ }),

/***/ 31970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ NoResultsMessage),
/* harmony export */   "Z": () => (/* binding */ IntegrationsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33643);
/* harmony import */ var _hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39626);
/* harmony import */ var _hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55749);
/* harmony import */ var components_badge_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51455);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84345);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88805);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46833);
/* harmony import */ var lib_get_integration_badges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34767);
/* harmony import */ var lib_integrations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33726);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77704);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_7__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 










function IntegrationsList({ integrations , onClearFiltersClicked  }) {
    return integrations.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        fixedColumns: 1,
        children: integrations.map((integration)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IntegrationCard, {
                integration: integration
            }, integration.id);
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoResultsMessage, {
        onClearFiltersClicked: onClearFiltersClicked
    });
}
/**
 * TODO: refactor the 'view details' cta to use
 * StandaloneLinkContents when lifted to a global component
 * https://app.asana.com/0/1202097197789424/1204167616054151
 */ function IntegrationCard({ integration  }) {
    const url = (0,lib_integrations__WEBPACK_IMPORTED_MODULE_9__/* .getIntegrationUrl */ .El)(integration);
    const isExternalLink = !url.startsWith("/");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ariaLabel: integration.name,
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().integrationCard),
        href: url,
        opensInNewTab: isExternalLink,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().cardContent),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().left),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().nameVersionWrapper),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().heading),
                                            children: integration.name
                                        }),
                                        !integration.hide_versions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().version),
                                            children: [
                                                "v",
                                                integration.versions[0]
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().organization),
                                    children: `@${integration.organization.slug}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().body),
                            children: integration.description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().right),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().badgeList),
                            badges: (0,lib_get_integration_badges__WEBPACK_IMPORTED_MODULE_8__/* .getIntegrationBadges */ .l)(integration, false),
                            size: "medium"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().viewDetails),
                            children: [
                                "View Details",
                                isExternalLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_external_link_16__WEBPACK_IMPORTED_MODULE_2__/* .IconExternalLink16 */ .g, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_arrow_right_16__WEBPACK_IMPORTED_MODULE_1__/* .IconArrowRight16 */ .k, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function NoResultsMessage({ onClearFiltersClicked , description  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().noResultsWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().noResultsTitle),
                children: "No Results"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().noResultsDescription),
                children: description || "Try adjusting your selected filters or using different keywords."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_10___default().noResultsButtonWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    onClick: (e)=>{
                        e.preventDefault();
                        onClearFiltersClicked();
                    },
                    color: "secondary",
                    text: "Clear Filters",
                    size: "small",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_3__/* .IconX16 */ .H, {})
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaginatedIntegrationsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48858);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_query_params__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_device_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32170);
/* harmony import */ var components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13702);
/* harmony import */ var _integrations_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31970);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77361);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_integrations_list__WEBPACK_IMPORTED_MODULE_5__]);
_integrations_list__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






/**
 * A small util to guard against invalid values for our
 * pagination query params, such as NaN or negative numbers.
 */ function coerceToDefaultValue(value, init) {
    if (isNaN(value) || value < 1) {
        return init;
    }
    return value;
}
/**
 * @TODO handle focus management on page & page size changes, if needed.
 * https://app.asana.com/0/1202097197789424/1203752518527704/f
 */ function PaginatedIntegrationsList({ integrations , onClearFiltersClicked  }) {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [_itemsPerPage, setItemsPerPage] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)("size", (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.withDefault)(use_query_params__WEBPACK_IMPORTED_MODULE_2__.NumberParam, 8), {
        enableBatching: true,
        updateType: "replaceIn",
        removeDefaultsFromUrl: true
    });
    const itemsPerPage = coerceToDefaultValue(_itemsPerPage, 8);
    // Sort integrations alphabetically. Right now this is our
    // preferred way of sorting. In the event we want to add different
    // sorting options in the future to this list, we'll need to support
    // them at this component.
    const sortedIntegrations = integrations.sort((a, b)=>{
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
    // Keep track of the current page & Integrations to display
    const [_currentPage, setCurrentPage] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.useQueryParam)("page", (0,use_query_params__WEBPACK_IMPORTED_MODULE_2__.withDefault)(use_query_params__WEBPACK_IMPORTED_MODULE_2__.NumberParam, 1), {
        updateType: "replaceIn",
        removeDefaultsFromUrl: true
    });
    const currentPage = coerceToDefaultValue(_currentPage, 1);
    const currentPageIntegrations = sortedIntegrations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const { isDesktop , isMobile , isTablet  } = (0,contexts_device_size__WEBPACK_IMPORTED_MODULE_3__/* .useDeviceSize */ .B)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().paginatedIntegrationsList),
        ref: containerRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_integrations_list__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                integrations: currentPageIntegrations,
                onClearFiltersClicked: onClearFiltersClicked
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().paginatorWrapper),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    totalItems: integrations.length,
                    pageSize: itemsPerPage,
                    page: currentPage,
                    onPageChange: (page)=>setCurrentPage(page),
                    onPageSizeChange: (size)=>setItemsPerPage(size),
                    children: [
                        (isDesktop || isTablet) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Info */ .Z.Info, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Nav */ .Z.Nav, {
                            type: isMobile ? "compact" : "truncated"
                        }),
                        isDesktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"].SizeSelector */ .Z.SizeSelector, {
                            sizes: [
                                4,
                                8,
                                16,
                                24
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ integrationLibrarySearchedEvent),
/* harmony export */   "t": () => (/* binding */ integrationLibraryFilterSelectedEvent)
/* harmony export */ });
/* harmony import */ var lib_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75066);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Track "Integration Library Searched" events.
 *
 * @see /analytics/spec/events/integration_library_searched.yml
 */ function integrationLibrarySearchedEvent({ search_query , results_count  }) {
    (0,lib_analytics__WEBPACK_IMPORTED_MODULE_0__/* .safeAnalyticsTrack */ .iH)("Integration Library Filtered Selected", {
        search_query,
        results_count
    });
}
/**
 * Track "Integration Library Filtered Selected" events.
 *
 * @see /analytics/spec/events/integration_library_filter_selected.yml
 */ function integrationLibraryFilterSelectedEvent({ filter_category , filter_value  }) {
    (0,lib_analytics__WEBPACK_IMPORTED_MODULE_0__/* .safeAnalyticsTrack */ .iH)("Integration Library Filtered Selected", {
        filter_category,
        filter_value
    });
}



/***/ }),

/***/ 45459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getFilteredIntegrations)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ const getFilteredIntegrations = ({ integrations , filterQuery  })=>{
    return integrations.filter((integration)=>{
        return integration.name.toLowerCase().includes(filterQuery.toLowerCase()) || integration.description.toLowerCase().includes(filterQuery.toLowerCase()) || integration.organization.slug.toLowerCase().includes(filterQuery.toLowerCase()) || integration.slug.toLowerCase().includes(filterQuery.toLowerCase());
    });
};



/***/ }),

/***/ 25826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchableIntegrationsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48858);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_query_params__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_filter_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51898);
/* harmony import */ var _hashicorp_flight_icons_svg_react_search_16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9543);
/* harmony import */ var _hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55749);
/* harmony import */ var _hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(88602);
/* harmony import */ var lib_hooks_use_typing_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20908);
/* harmony import */ var views_product_integrations_landing_contexts_integrations_search_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61145);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84345);
/* harmony import */ var components_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64698);
/* harmony import */ var components_form_components_legend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55509);
/* harmony import */ var components_form_field_controls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70005);
/* harmony import */ var components_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62493);
/* harmony import */ var components_filter_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2346);
/* harmony import */ var components_multi_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46351);
/* harmony import */ var _paginated_integrations_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37222);
/* harmony import */ var _helpers_analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29514);
/* harmony import */ var _helpers_get_filtered_integrations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45459);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(63016);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_dialog__WEBPACK_IMPORTED_MODULE_10__, _paginated_integrations_list__WEBPACK_IMPORTED_MODULE_16__]);
([components_dialog__WEBPACK_IMPORTED_MODULE_10__, _paginated_integrations_list__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




















function SearchableIntegrationsList({ className  }) {
    const { filteredIntegrations: integrations  } = (0,views_product_integrations_landing_contexts_integrations_search_context__WEBPACK_IMPORTED_MODULE_8__/* .useIntegrationsSearchContext */ .l)();
    const [, setCurrentPage] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)("page", (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.withDefault)(use_query_params__WEBPACK_IMPORTED_MODULE_3__.NumberParam, 1), {
        enableBatching: true,
        updateType: "replaceIn",
        removeDefaultsFromUrl: true
    });
    const resetPage = ()=>setCurrentPage(1);
    const [filterQuery, setFilterQuery] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)("filter", (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.withDefault)(use_query_params__WEBPACK_IMPORTED_MODULE_3__.StringParam, ""), {
        enableBatching: true,
        updateType: "replaceIn",
        removeDefaultsFromUrl: true
    });
    const filteredIntegrations = (0,_helpers_get_filtered_integrations__WEBPACK_IMPORTED_MODULE_18__/* .getFilteredIntegrations */ .u)({
        integrations,
        filterQuery
    });
    /**
	 * Track an "integration_library_searched" event when the filterQuery changes
	 *
	 * Note: we only want to track this event if the query input is meaningful.
	 * We consider query input lengths of more than 2 characters to be meaningful
	 * (in fact, we don't filter results unless the query is > 2 chars long).
	 *
	 * Note as well that we useTypingDebounce here to reduce the number of events.
	 * Without useTypingDebounce, an event would fire on every character typed.
	 */ const searchedEventCallback = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (filterQuery.length > 2) {
            (0,_helpers_analytics__WEBPACK_IMPORTED_MODULE_17__/* .integrationLibrarySearchedEvent */ .e)({
                search_query: filterQuery,
                results_count: filteredIntegrations.length
            });
        }
    }, [
        filterQuery,
        filteredIntegrations.length
    ]);
    (0,lib_hooks_use_typing_debounce__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(searchedEventCallback);
    const { tierOptions , tiersCheckedArray , setTiersCheckedArray , sortedComponents , componentCheckedArray , setComponentCheckedArray , flags , flagsCheckedArray , setFlagsCheckedArray , types , typesCheckedArray , setTypesCheckedArray , atLeastOneFacetSelected  } = (0,views_product_integrations_landing_contexts_integrations_search_context__WEBPACK_IMPORTED_MODULE_8__/* .useIntegrationsSearchContext */ .l)();
    // handleClearFilters resets the state of all filters
    const handleClearFilters = (e)=>{
        resetPage();
        setFilterQuery("");
        setTiersCheckedArray(tiersCheckedArray.map((v, i)=>false));
        setComponentCheckedArray(componentCheckedArray.map((v, i)=>false));
        setFlagsCheckedArray(flagsCheckedArray.map((v, i)=>false));
        setTypesCheckedArray(typesCheckedArray.map((v, i)=>false));
    };
    const makeToggleTierHandler = (index, tier)=>()=>{
            // reset page on filter change
            resetPage();
            // small wrapper to trigger analytics event if given a `true` value
            const fireTierAnalytics = (value)=>{
                if (value) {
                    (0,_helpers_analytics__WEBPACK_IMPORTED_MODULE_17__/* .integrationLibraryFilterSelectedEvent */ .t)({
                        filter_category: "tier",
                        filter_value: tier
                    });
                }
            };
            const newTierCheckedArray = [
                ...tiersCheckedArray
            ];
            newTierCheckedArray[index] = !newTierCheckedArray[index];
            setTiersCheckedArray(newTierCheckedArray);
            fireTierAnalytics(newTierCheckedArray[index]);
        };
    const makeToggleFlagHandler = (i, flagName)=>()=>{
            // reset page on filter change
            resetPage();
            const newFlags = [
                ...flagsCheckedArray
            ];
            const isFlagSelectedInNext = !newFlags[i];
            // When any flag input is checked, track an analytics filtered event
            if (isFlagSelectedInNext) {
                (0,_helpers_analytics__WEBPACK_IMPORTED_MODULE_17__/* .integrationLibraryFilterSelectedEvent */ .t)({
                    filter_category: "flag",
                    filter_value: flagName
                });
            }
            newFlags[i] = isFlagSelectedInNext;
            setFlagsCheckedArray(newFlags);
        };
    const makeToggleComponentHandler = (i, componentName)=>()=>{
            // reset page on filter change
            resetPage();
            const newComponents = [
                ...componentCheckedArray
            ];
            const isComponentSelectedInNext = !newComponents[i];
            if (isComponentSelectedInNext) {
                (0,_helpers_analytics__WEBPACK_IMPORTED_MODULE_17__/* .integrationLibraryFilterSelectedEvent */ .t)({
                    filter_category: "component",
                    filter_value: componentName
                });
            }
            newComponents[i] = isComponentSelectedInNext;
            setComponentCheckedArray(newComponents);
        };
    const makeToggleTypeHandler = (i, typeName)=>()=>{
            // reset page on filter change
            resetPage();
            const newTypes = [
                ...typesCheckedArray
            ];
            const isTypeSelectedInNext = !newTypes[i];
            if (isTypeSelectedInNext) {
                (0,_helpers_analytics__WEBPACK_IMPORTED_MODULE_17__/* .integrationLibraryFilterSelectedEvent */ .t)({
                    filter_category: "type",
                    filter_value: typeName
                });
            }
            newTypes[i] = isTypeSelectedInNext;
            setTypesCheckedArray(newTypes);
        };
    const [isFilterDialogOpen, setIsFilterDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const resultText = `${filteredIntegrations.length} ${filteredIntegrations.length === 1 ? "result found" : "results found"}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().searchableIntegrationsList), className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_filter_input__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().filterInput),
                        IconComponent: _hashicorp_flight_icons_svg_react_search_16__WEBPACK_IMPORTED_MODULE_5__/* .IconSearch16 */ .x,
                        value: filterQuery,
                        onChange: (v)=>{
                            setFilterQuery(v);
                            resetPage();
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().filterOptions),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().selectStack), (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().tablet_up)),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_multi_select__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        text: "Tiers",
                                        options: tierOptions.map((tierOption, i)=>{
                                            const selected = tiersCheckedArray[i];
                                            return {
                                                id: tierOption,
                                                label: (0,_hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(tierOption),
                                                onChange: makeToggleTierHandler(i, tierOption),
                                                selected
                                            };
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_multi_select__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        text: "Components",
                                        options: sortedComponents.map(({ slug , plural_name , name  }, i)=>{
                                            const selected = componentCheckedArray[i];
                                            return {
                                                id: slug,
                                                label: (0,_hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(plural_name),
                                                onChange: makeToggleComponentHandler(i, name),
                                                selected
                                            };
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_multi_select__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        text: "Flags",
                                        options: flags.map(({ id , name  }, i)=>{
                                            const selected = flagsCheckedArray[i];
                                            return {
                                                id,
                                                label: name,
                                                onChange: makeToggleFlagHandler(i, name),
                                                selected
                                            };
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_multi_select__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        text: "Types",
                                        options: types.map(({ id , name , plural_name  }, i)=>{
                                            const selected = typesCheckedArray[i];
                                            return {
                                                id,
                                                label: plural_name,
                                                onChange: makeToggleTypeHandler(i, name),
                                                selected
                                            };
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().results), (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().tablet_up)),
                                role: "status",
                                children: resultText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().row), (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().mobile_only)),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().row_fill),
                                    text: "Filters",
                                    color: "secondary",
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_filter_16__WEBPACK_IMPORTED_MODULE_4__/* .IconFilter16 */ .N, {}),
                                    iconPosition: "trailing",
                                    onClick: ()=>setIsFilterDialogOpen(true)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().filterInfo),
                        children: [
                            tierOptions.map((e, i)=>{
                                const checked = tiersCheckedArray[i];
                                return checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: (0,_hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(e),
                                    onRemove: makeToggleTierHandler(i, e)
                                }, e);
                            }),
                            sortedComponents.map((e, i)=>{
                                const checked = componentCheckedArray[i];
                                return checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: (0,_hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(e.plural_name),
                                    onRemove: makeToggleComponentHandler(i, e.name)
                                }, e.id);
                            }),
                            flags.map((e, i)=>{
                                const checked = flagsCheckedArray[i];
                                return checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: e.name,
                                    onRemove: makeToggleFlagHandler(i, e.name)
                                }, e.id);
                            }),
                            types.map((e, i)=>{
                                const checked = typesCheckedArray[i];
                                return checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tag__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    text: e.plural_name,
                                    onRemove: makeToggleTypeHandler(i, e.name)
                                }, e.id);
                            }),
                            atLeastOneFacetSelected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                text: "Reset filters",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_6__/* .IconX16 */ .H, {}),
                                color: "tertiary",
                                size: "small",
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().tablet_up), (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().clearFiltersButton)),
                                onClick: handleClearFilters
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().noFilters),
                                children: "No filters selected"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().results), (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().mobile_only)),
                children: resultText
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_paginated_integrations_list__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                integrations: filteredIntegrations,
                onClearFiltersClicked: ()=>{
                    handleClearFilters(null);
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_dialog__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                isOpen: isFilterDialogOpen,
                label: "Tutorial filters",
                onDismiss: ()=>setIsFilterDialogOpen(false),
                variant: "bottom",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().row), (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().justifyEnd)),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().exitIcon),
                            onClick: ()=>setIsFilterDialogOpen(false),
                            "aria-label": "Cancel",
                            type: "button",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_6__/* .IconX16 */ .H, {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().row),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                text: "Done",
                                onClick: ()=>setIsFilterDialogOpen(false),
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().row_fill)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                disabled: !atLeastOneFacetSelected,
                                text: "Reset Filters",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_6__/* .IconX16 */ .H, {}),
                                color: "tertiary",
                                onClick: handleClearFilters,
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().row_fill)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().mobileFilters),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileFilters, {})
                    })
                ]
            })
        ]
    });
}
// Renders Tier/Component/Flags checkboxes
function MobileFilters() {
    const { tierOptions , tiersCheckedArray , setTiersCheckedArray , sortedComponents , componentCheckedArray , setComponentCheckedArray , flags , flagsCheckedArray , setFlagsCheckedArray , types , typesCheckedArray , setTypesCheckedArray  } = (0,views_product_integrations_landing_contexts_integrations_search_context__WEBPACK_IMPORTED_MODULE_8__/* .useIntegrationsSearchContext */ .l)();
    const makeToggleTierHandler = (index)=>()=>{
            const newTierCheckedArray = [
                ...tiersCheckedArray
            ];
            newTierCheckedArray[index] = !newTierCheckedArray[index];
            setTiersCheckedArray(newTierCheckedArray);
        };
    const makeToggleComponentHandler = (index)=>()=>{
            const newComponentCheckedArray = [
                ...componentCheckedArray
            ];
            newComponentCheckedArray[index] = !newComponentCheckedArray[index];
            setComponentCheckedArray(newComponentCheckedArray);
        };
    const makeToggleFlagHandler = (index)=>()=>{
            const newFlagsCheckedArray = [
                ...flagsCheckedArray
            ];
            newFlagsCheckedArray[index] = !newFlagsCheckedArray[index];
            setFlagsCheckedArray(newFlagsCheckedArray);
        };
    const makeToggleTypeHandler = (index)=>()=>{
            const newTypesCheckedArray = [
                ...typesCheckedArray
            ];
            newTypesCheckedArray[index] = !newTypesCheckedArray[index];
            setTypesCheckedArray(newTypesCheckedArray);
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            tierOptions.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().optionsContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_components_legend__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: "Tier"
                    }),
                    tierOptions.map((e, i)=>{
                        const checked = tiersCheckedArray[i];
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_12__/* .CheckboxField */ .j, {
                            labelFontWeight: "regular",
                            label: (0,_hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(e),
                            checked: checked,
                            onChange: makeToggleTierHandler(i)
                        }, e);
                    })
                ]
            }) : null,
            sortedComponents.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().optionsContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_components_legend__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: "Component"
                    }),
                    sortedComponents.map((e, i)=>{
                        const checked = componentCheckedArray[i];
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_12__/* .CheckboxField */ .j, {
                            labelFontWeight: "regular",
                            label: (0,_hashicorp_platform_util_text_capitalize__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(e.plural_name),
                            checked: checked,
                            onChange: makeToggleComponentHandler(i)
                        }, e.id);
                    })
                ]
            }) : null,
            flags.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().optionsContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_components_legend__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: "Flags"
                    }),
                    flags.map((e, i)=>{
                        const checked = flagsCheckedArray[i];
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_12__/* .CheckboxField */ .j, {
                            labelFontWeight: "regular",
                            label: e.name,
                            checked: checked,
                            onChange: makeToggleFlagHandler(i)
                        }, e.id);
                    })
                ]
            }) : null,
            types.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_19___default().optionsContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_components_legend__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: "Type"
                    }),
                    types.map((e, i)=>{
                        const checked = typesCheckedArray[i];
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_form_field_controls__WEBPACK_IMPORTED_MODULE_12__/* .CheckboxField */ .j, {
                            labelFontWeight: "regular",
                            label: e.name,
                            checked: checked,
                            onChange: makeToggleTypeHandler(i)
                        }, e.id);
                    })
                ]
            }) : null
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rh": () => (/* binding */ IntegrationsSearchProvider),
/* harmony export */   "l": () => (/* binding */ useIntegrationsSearchContext)
/* harmony export */ });
/* unused harmony export IntegrationsSearchContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57193);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48858);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_query_params__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/**
 * Uses a comma to delimit entries. e.g. ['a', 'b'] => qp?=a,b
 * https://github.com/pbeshai/use-query-params/blob/master/packages/use-query-params/README.md?plain=1#L374-L380
 */ const CommaArrayParam = {
    encode: (array)=>(0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.encodeDelimitedArray)(array, ","),
    decode: (arrayStr)=>(0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.decodeDelimitedArray)(arrayStr, ",")
};
const IntegrationsSearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    integrations: [],
    tierOptions: [],
    tiersCheckedArray: [],
    setTiersCheckedArray: (val)=>void 1,
    sortedComponents: [],
    componentCheckedArray: [],
    setComponentCheckedArray: (val)=>void 1,
    flags: [],
    flagsCheckedArray: [],
    setFlagsCheckedArray: (val)=>void 1,
    types: [],
    typesCheckedArray: [],
    setTypesCheckedArray: (val)=>void 1,
    atLeastOneFacetSelected: false,
    filteredIntegrations: []
});
// The logical sort ordering of the Tiers
const tierSortVal = (tier)=>{
    switch(tier){
        case lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_1__/* .Tier.OFFICIAL */ .K0.OFFICIAL:
            return 1;
        case lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_1__/* .Tier.PARTNER */ .K0.PARTNER:
            return 2;
        case lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_1__/* .Tier.COMMUNITY */ .K0.COMMUNITY:
        default:
            return 3;
    }
};
const IntegrationsSearchProvider = ({ children , integrations: _integrations  })=>{
    const sharedOptions = {
        enableBatching: true,
        updateType: "replaceIn",
        removeDefaultsFromUrl: true
    };
    const [qsTiers, setQsTiers] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)("tiers", (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.withDefault)(CommaArrayParam, []), sharedOptions);
    const [qsComponents, setQsComponents] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)("components", (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.withDefault)(CommaArrayParam, []), sharedOptions);
    const [qsFlags, setQsFlags] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)("flags", (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.withDefault)(CommaArrayParam, []), sharedOptions);
    const [qsTypes, setQsTypes] = (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.useQueryParam)("types", (0,use_query_params__WEBPACK_IMPORTED_MODULE_3__.withDefault)(CommaArrayParam, []), sharedOptions);
    // Filter out integrations that don't have releases yet
    const integrations = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return _integrations.filter((integration)=>{
            return integration.versions.length > 0;
        });
    }, [
        _integrations
    ]);
    // accumulate all unique filterable integration fields
    // - tiers
    // - components
    // - flags
    // - types
    const { tiers , components , flags , types  } = integrations.reduce((acc, next)=>{
        // collect tiers
        if (!acc.tiers.some((e)=>e == next.tier)) {
            acc.tiers = acc.tiers.concat(next.tier);
            acc.tiers = acc.tiers.sort((a, b)=>{
                if (tierSortVal(a) > tierSortVal(b)) {
                    return 1;
                } else if (tierSortVal(a) < tierSortVal(b)) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        // collect components
        next.components.forEach((component)=>{
            if (!acc.components.some((e)=>e.id == component.id)) {
                acc.components = acc.components.concat(component).sort((a, b)=>{
                    const textA = a.name.toLowerCase();
                    const textB = b.name.toLowerCase();
                    return textA < textB ? -1 : textA > textB ? 1 : 0;
                });
            }
        });
        // collect flags
        next.flags.forEach((flag)=>{
            if (!acc.flags.some((e)=>e.id == flag.id)) {
                acc.flags = acc.flags.concat(flag);
            }
        });
        // collect types
        if (next.integration_type) {
            if (!acc.types.some((e)=>e.id == next.integration_type.id)) {
                acc.types = acc.types.concat(next.integration_type);
            }
        }
        return acc;
    }, {
        tiers: [],
        components: [],
        flags: [],
        types: []
    });
    const tiersCheckedArray = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return tiers.map((tier)=>{
            return qsTiers.includes(tier);
        });
    }, [
        tiers,
        qsTiers
    ]);
    const setTiersCheckedArray = (val)=>{
        // map [true, false, false, true] => [Tier, Tier]
        const newTiers = val.map((checked, index)=>{
            if (checked) {
                return tiers[index];
            }
        }).filter(Boolean);
        // update URL & state
        setQsTiers(newTiers);
    };
    const flagsCheckedArray = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return flags.map((flag)=>{
            return qsFlags.includes(flag.slug);
        });
    }, [
        flags,
        qsFlags
    ]);
    const setFlagsCheckedArray = (val)=>{
        // map [true, false, false, true] => [Flag, Flag]
        const newFlags = val.map((checked, index)=>{
            if (checked) {
                return flags[index].slug;
            }
        }).filter(Boolean);
        // update URL & state
        setQsFlags(newFlags);
    };
    // We have to manage our component checked state in a singular
    // state object as there are an unknown number of components.
    const componentCheckedArray = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return components.map((component)=>{
            return qsComponents.includes(component.slug);
        });
    }, [
        components,
        qsComponents
    ]);
    const setComponentCheckedArray = (val)=>{
        // map [true, false, false, true] => [Component, Component]
        const newComponents = val.map((checked, index)=>{
            if (checked) {
                return components[index].slug;
            }
        }).filter(Boolean);
        // update URL & state
        setQsComponents(newComponents);
    };
    const typesCheckedArray = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return types.map((type)=>{
            return qsTypes.includes(type.slug);
        });
    }, [
        types,
        qsTypes
    ]);
    const setTypesCheckedArray = (val)=>{
        // map [true, false, false, true] => [Type, Type]
        const newTypes = val.map((checked, index)=>{
            if (checked) {
                return types[index].slug;
            }
        }).filter(Boolean);
        // update URL & state
        setQsTypes(newTypes);
    };
    // Now filter our integrations if facets are selected
    const atLeastOneFacetSelected = tiersCheckedArray.includes(true) || componentCheckedArray.includes(true) || flagsCheckedArray.includes(true) || typesCheckedArray.includes(true);
    let filteredIntegrations = integrations;
    if (atLeastOneFacetSelected) {
        filteredIntegrations = integrations.filter((integration)=>{
            // Default tierMatch to true if nothing is checked, false otherwise
            let tierMatch = !tiersCheckedArray.includes(true);
            tiersCheckedArray.forEach((checked, index)=>{
                if (checked) {
                    const checkedTier = tiers[index];
                    if (integration.tier === checkedTier) {
                        tierMatch = true;
                    }
                }
            });
            // Loop over each component to see if they match any checked components
            // If there are no components selected, default this to true
            let componentMatch = !componentCheckedArray.includes(true);
            componentCheckedArray.forEach((checked, index)=>{
                if (checked) {
                    const checkedComponent = components[index];
                    // Check each integration component
                    integration.components.forEach((component)=>{
                        if (component.slug === checkedComponent.slug) {
                            componentMatch = true;
                        }
                    });
                }
            });
            // If no flags are selected, do not filter by flag
            let flagMatch = !flagsCheckedArray.includes(true);
            // For each checked flag, loop over each integration's list of flags
            // and return true if at least 1 flag matches
            flagsCheckedArray.forEach((checked, index)=>{
                if (checked) {
                    const checkedFlag = flags[index];
                    integration.flags.forEach((flag)=>{
                        if (flag.slug === checkedFlag.slug) {
                            flagMatch = true;
                        }
                    });
                }
            });
            // If no types are selected, do not filter by type
            let typeMatch = !typesCheckedArray.includes(true);
            typesCheckedArray.forEach((checked, index)=>{
                // set typeMatch to true if the integrations type is selected
                if (checked) {
                    const checkedType = types[index];
                    if (integration.integration_type.slug === checkedType.slug) {
                        typeMatch = true;
                    }
                }
            });
            return tierMatch && componentMatch && flagMatch && typeMatch;
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IntegrationsSearchContext.Provider, {
        value: {
            integrations,
            tierOptions: tiers,
            tiersCheckedArray,
            setTiersCheckedArray,
            sortedComponents: components,
            componentCheckedArray,
            setComponentCheckedArray,
            atLeastOneFacetSelected,
            flags,
            flagsCheckedArray,
            setFlagsCheckedArray,
            types,
            typesCheckedArray,
            setTypesCheckedArray,
            filteredIntegrations
        },
        children: children
    });
};
const useIntegrationsSearchContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(IntegrationsSearchContext);


/***/ }),

/***/ 81302:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductIntegrationsLanding)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28617);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_searchable_integrations_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25826);
/* harmony import */ var _contexts_integrations_search_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61145);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64884);
/* harmony import */ var _components_branded_header_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1245);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_searchable_integrations_list__WEBPACK_IMPORTED_MODULE_1__, layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__]);
([_components_searchable_integrations_list__WEBPACK_IMPORTED_MODULE_1__, layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





function ProductIntegrationsLanding({ integrations , sidebarNavDataLevels , breadcrumbLinks , product  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_integrations_search_context__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationsSearchProvider */ .Rh, {
        integrations: integrations,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            sidebarNavDataLevels: sidebarNavDataLevels,
            breadcrumbLinks: breadcrumbLinks,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainArea),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_branded_header_card__WEBPACK_IMPORTED_MODULE_4__/* .BrandedHeaderCard */ .m, {
                        productSlug: product.slug,
                        heading: `${product.name} Integrations`,
                        description: product.integrationsConfig.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchable_integrations_list__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchList)
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 44717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStaticPaths),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46064);
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95655);
/* harmony import */ var lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57193);
/* harmony import */ var lib_integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33726);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ // Third party imports


// Integration-related imports


/**
 * Return a productSlug path for each product with integrations enabled.
 */ async function getStaticPaths() {
    // Filter for products with integrations enabled
    const enabledProductSlugs = ["vault","waypoint","nomad","packer"];
    // Transform slugs into path params
    const paths = enabledProductSlugs.map((productSlug)=>({
            params: {
                productSlug
            }
        }));
    return {
        paths,
        fallback: false
    };
}
/**
 * Given a productSlug parameter,
 * Return static props for an integrations landing view.
 */ async function getStaticProps({ params  }) {
    // Pull out the Product Config
    const product = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_1__/* .cachedGetProductData */ .i)(params.productSlug);
    const integrations = await (0,lib_integrations_api_client_integration__WEBPACK_IMPORTED_MODULE_2__/* .fetchAllProductIntegrations */ .e7)(params.productSlug);
    const sidebarNavDataLevels = [
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_0__/* .generateTopLevelSidebarNavData */ .Vz)(product.name),
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_0__/* .generateProductLandingSidebarNavData */ ._G)(product),
        (0,lib_integrations__WEBPACK_IMPORTED_MODULE_3__/* .generateProductIntegrationLibrarySidebarNavData */ .l_)(product)
    ];
    const breadcrumbLinks = [
        {
            title: "Developer",
            url: "/",
            isCurrentPage: false
        },
        {
            title: product.name,
            url: `/${product.slug}`,
            isCurrentPage: false
        },
        {
            title: "Integrations",
            url: `/${product.slug}/integrations`,
            isCurrentPage: true
        }
    ];
    return {
        revalidate: false,
        props: {
            metadata: {
                title: `Integrations`
            },
            product,
            integrations,
            sidebarNavDataLevels,
            breadcrumbLinks
        }
    };
}


/***/ }),

/***/ 95780:
/***/ ((module) => {

"use strict";
module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 48827:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/dialog");

/***/ }),

/***/ 9677:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/portal");

/***/ }),

/***/ 80395:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/tooltip");

/***/ }),

/***/ 76278:
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/utils");

/***/ }),

/***/ 18910:
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 33666:
/***/ ((module) => {

"use strict";
module.exports = require("@vercel/fetch");

/***/ }),

/***/ 38970:
/***/ ((module) => {

"use strict";
module.exports = require("algoliasearch");

/***/ }),

/***/ 59003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 79316:
/***/ ((module) => {

"use strict";
module.exports = require("fathom-client");

/***/ }),

/***/ 56734:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 52591:
/***/ ((module) => {

"use strict";
module.exports = require("moize");

/***/ }),

/***/ 23231:
/***/ ((module) => {

"use strict";
module.exports = require("ms");

/***/ }),

/***/ 41649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 51162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 79103:
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 48922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 19785:
/***/ ((module) => {

"use strict";
module.exports = require("react-intersection-observer");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 50934:
/***/ ((module) => {

"use strict";
module.exports = require("shellwords");

/***/ }),

/***/ 73673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 48858:
/***/ ((module) => {

"use strict";
module.exports = require("use-query-params");

/***/ }),

/***/ 66197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

"use strict";
module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 23135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 66809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

"use strict";
module.exports = import("zod");;

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,9330,5390,9146,32,3643,1877,453,4203,8725,3076,504,9621,5398,1678,7232,8805,4884,6182,6415,5,5587], () => (__webpack_exec__(76660)));
module.exports = __webpack_exports__;

})();