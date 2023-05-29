(() => {
var exports = {};
exports.id = 1069;
exports.ids = [1069];
exports.modules = {

/***/ 25024:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "bookmark-button_button__tCD5U"
};


/***/ }),

/***/ 20169:
/***/ ((module) => {

// Exports
module.exports = {
	"position": "icons_position__Tgkbv",
	"base": "icons_base__b__ZM",
	"hover": "icons_hover__RV5sa"
};


/***/ }),

/***/ 17631:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "sign-in-dialog_header__ws87f",
	"buttonGroup": "sign-in-dialog_buttonGroup__G7z5x",
	"heading": "sign-in-dialog_heading__QzEE1",
	"subheading": "sign-in-dialog_subheading__NHeyy",
	"exitIcon": "sign-in-dialog_exitIcon__wr_2M"
};


/***/ }),

/***/ 83908:
/***/ ((module) => {

// Exports
module.exports = {
	"toastIcon": "bookmark-toast_toastIcon__A_WLI"
};


/***/ }),

/***/ 59665:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "icon-tile_root__VcaKq",
	"size-small": "icon-tile_size-small__HVzI8",
	"size-medium": "icon-tile_size-medium__vptri",
	"size-large": "icon-tile_size-large__pgQmk",
	"size-extra-large": "icon-tile_size-extra-large__b_Ex3",
	"color-neutral": "icon-tile_color-neutral__Lq1vl",
	"color-neutral-dark": "icon-tile_color-neutral-dark__HfjXx",
	"color-boundary": "icon-tile_color-boundary__vNS4T",
	"color-consul": "icon-tile_color-consul__JCxDC",
	"color-nomad": "icon-tile_color-nomad__3BT9_",
	"color-packer": "icon-tile_color-packer__7zIDY",
	"color-terraform": "icon-tile_color-terraform__DKznJ",
	"color-vagrant": "icon-tile_color-vagrant__cOT22",
	"color-vault": "icon-tile_color-vault__V9XCE",
	"color-waypoint": "icon-tile_color-waypoint__9bZTt"
};


/***/ }),

/***/ 67325:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "inline-link_root__jsfnc g-focus-ring-from-box-shadow"
};


/***/ }),

/***/ 69062:
/***/ ((module) => {

// Exports
module.exports = {
	"progressIconAndLabel": "progress-icon-and-label_progressIconAndLabel__Ct2Te",
	"progressLabel": "progress-icon-and-label_progressLabel__328sj hds-typography-body-100 hds-font-weight-medium"
};


/***/ }),

/***/ 3859:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "tutorial-card_root__TXW7_",
	"eyebrow": "tutorial-card_eyebrow__wqHvC"
};


/***/ }),

/***/ 39121:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "card-badges_root__GAT4k",
	"listItem": "card-badges_listItem__kFqDw"
};


/***/ }),

/***/ 81553:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "badges_list__q_WyI",
	"listItem": "badges_listItem__i4ftj hds-font-weight-medium hds-typography-display-100",
	"seperator": "badges_seperator__w13Kb",
	"badge": "badges_badge__eU0Wy"
};


/***/ }),

/***/ 19654:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "collection-meta_icon__bj8sx",
	"heading": "collection-meta_heading__YA_Yt",
	"description": "collection-meta_description__9mKk_ hds-typography-body-300 hds-font-weight-regular",
	"createAccountCta": "collection-meta_createAccountCta__rtHfK",
	"cta": "collection-meta_cta__FzrC_"
};


/***/ }),

/***/ 81661:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "collection-tutorial-list_root__6Beek"
};


/***/ }),

/***/ 67733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Connected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66245);
/* harmony import */ var hooks_bookmarks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29591);
/* harmony import */ var components_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64698);
/* harmony import */ var _sign_in_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63301);
/* harmony import */ var _toast_make_bookmark_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93181);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_dialog__WEBPACK_IMPORTED_MODULE_4__]);
components_dialog__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






/**
 * This HOC serves as a 'controller'
 * for rendering the various state of bookmark
 * interaction. It accepts a UI component to render and
 * fetches the tutorial bookmark state.
 *
 * When clicked, it renders a dialog if unauthenticated,
 * and updates data when authenticated.
 */ function Connected(BookmarkComponent) {
    return function ConnectedBookmarkComponent({ tutorial  }) {
        const { isAuthenticated , signIn  } = (0,hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
        const { isBookmarked  } = (0,hooks_bookmarks__WEBPACK_IMPORTED_MODULE_3__/* .useIsBookmarked */ .am)({
            tutorialId: tutorial.id
        });
        const { addBookmark , removeBookmark  } = (0,hooks_bookmarks__WEBPACK_IMPORTED_MODULE_3__/* .useBookmarkMutations */ .AK)();
        const [showDialog, setShowDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        const openDialog = ()=>setShowDialog(true);
        const closeDialog = ()=>setShowDialog(false);
        const handleOnClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
            if (!isAuthenticated) {
                openDialog();
                return;
            }
            if (isBookmarked) {
                removeBookmark(tutorial.id, {
                    onSuccess: ()=>(0,_toast_make_bookmark_toast__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("remove", tutorial.name)
                });
            } else {
                addBookmark(tutorial.id, {
                    onSuccess: ()=>(0,_toast_make_bookmark_toast__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("add", tutorial.name)
                });
            }
        }, [
            addBookmark,
            isAuthenticated,
            isBookmarked,
            removeBookmark,
            tutorial.id,
            tutorial.name
        ]);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookmarkComponent, {
                    handleOnClick: handleOnClick,
                    isBookmarked: isBookmarked
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_dialog__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    onDismiss: closeDialog,
                    isOpen: showDialog,
                    label: "Sign in to bookmark",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sign_in_dialog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        onDismiss: closeDialog,
                        signIn: ()=>signIn()
                    })
                })
            ]
        });
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AddBookmarkIcon),
/* harmony export */   "x": () => (/* binding */ RemoveBookmarkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78725);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_add_16__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9334);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_fill_16__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11764);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_remove_fill_16__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88875);
/* harmony import */ var _icons_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20169);
/* harmony import */ var _icons_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_module_css__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






function AddBookmarkIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_16__WEBPACK_IMPORTED_MODULE_2__/* .IconBookmark16 */ .U, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().position), (_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().base))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_add_16__WEBPACK_IMPORTED_MODULE_3__/* .IconBookmarkAdd16 */ .d, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().position), (_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().hover))
            })
        ]
    });
}
function RemoveBookmarkIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_fill_16__WEBPACK_IMPORTED_MODULE_4__/* .IconBookmarkFill16 */ .i, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().position), (_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().base))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_remove_fill_16__WEBPACK_IMPORTED_MODULE_5__/* .IconBookmarkRemoveFill16 */ .n, {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().position), (_icons_module_css__WEBPACK_IMPORTED_MODULE_6___default().hover))
            })
        ]
    });
}


/***/ }),

/***/ 73309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xt": () => (/* binding */ TutorialMetaBookmarkButton),
/* harmony export */   "sg": () => (/* binding */ BookmarkButtonIconOnly),
/* harmony export */   "uw": () => (/* binding */ TutorialCardBookmarkButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_add_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9334);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_fill_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11764);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84345);
/* harmony import */ var _helpers_connected_bookmark_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67733);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58289);
/* harmony import */ var _bookmark_button_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25024);
/* harmony import */ var _bookmark_button_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bookmark_button_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_connected_bookmark_button__WEBPACK_IMPORTED_MODULE_4__]);
_helpers_connected_bookmark_button__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const bookmarkButtonConfig = {
    add: {
        text: "Add bookmark",
        baseIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_add_16__WEBPACK_IMPORTED_MODULE_1__/* .IconBookmarkAdd16 */ .d, {}),
        iconWithHover: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_5__/* .AddBookmarkIcon */ .Q, {})
    },
    remove: {
        text: "Remove bookmark",
        baseIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_fill_16__WEBPACK_IMPORTED_MODULE_2__/* .IconBookmarkFill16 */ .i, {}),
        iconWithHover: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_5__/* .RemoveBookmarkIcon */ .x, {})
    }
};
/**
 * This bookmark icon for now is used in tutorial cards
 * only. The hover icon state for this is unique, see
 * the /icons file for more context.
 */ function BookmarkButtonIconOnly({ handleOnClick , isBookmarked  }) {
    const { add , remove  } = bookmarkButtonConfig;
    const ariaLabel = isBookmarked ? remove.text : add.text;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-pressed": isBookmarked,
        onClick: handleOnClick,
        "aria-label": ariaLabel,
        className: (_bookmark_button_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
        children: isBookmarked ? remove.iconWithHover : add.iconWithHover
    });
}
/**
 * This component is a regular button, currently used
 * only in the tutorial meta component.
 *
 * 05-16-23 - we removed the label associated with this button to clean up the metadata area.
 * This comes with the tradeoff of this button being more difficult for voice recognition users to interact with it
 * as they need to guess the associated aria label to do so. See all the tradeoffs documented here:
 *  https://www.figma.com/file/NAFjIPkbwjyY8jPl6T9nlP/Tutorial-Variants?type=design&node-id=357-36771&t=R7V6tJoa5Omj5Fe4-0
 */ function BookmarkButtonSecondaryIcon({ handleOnClick , isBookmarked  }) {
    const { add , remove  } = bookmarkButtonConfig;
    const buttonProps = isBookmarked ? {
        ["aria-label"]: remove.text,
        icon: remove.baseIcon
    } : {
        ["aria-label"]: add.text,
        icon: add.baseIcon
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        color: "secondary",
        size: "small",
        onClick: handleOnClick,
        ...buttonProps
    });
}
/**
 * The above components are only responsible for rendering the bookmark UI
 * The below components are wrapped with an HOC - `withDialog`,
 * which passes the `handleOnClick` logic, checks for authentication,
 * and opens a dialog to prompt authentication.
 *
 * It also fetches the bookmark state and updates the API
 * upon user interaction, if authenticated.
 */ const TutorialCardBookmarkButton = (0,_helpers_connected_bookmark_button__WEBPACK_IMPORTED_MODULE_4__/* .Connected */ .E)(BookmarkButtonIconOnly);
const TutorialMetaBookmarkButton = (0,_helpers_connected_bookmark_button__WEBPACK_IMPORTED_MODULE_4__/* .Connected */ .E)(BookmarkButtonSecondaryIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BookmarkSignInPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55749);
/* harmony import */ var components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84345);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14617);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33356);
/* harmony import */ var _sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17631);
/* harmony import */ var _sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





function BookmarkSignInPrompt({ onDismiss , signIn  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        level: 1,
                        size: 300,
                        weight: "semibold",
                        className: (_sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading),
                        children: "Please sign in to bookmark this tutorial."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: onDismiss,
                        "aria-label": "Cancel",
                        type: "button",
                        className: (_sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5___default().exitIcon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_x_16__WEBPACK_IMPORTED_MODULE_1__/* .IconX16 */ .H, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: (_sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5___default().subheading),
                children: "In order to add this bookmark, you must be signed in. Please sign in and try again."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_sign_in_dialog_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttonGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        text: "Sign in",
                        onClick: signIn
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        text: "Cancel",
                        color: "secondary",
                        onClick: onDismiss
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 93181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeBookmarkToast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_add_24__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75348);
/* harmony import */ var _hashicorp_flight_icons_svg_react_bookmark_remove_24__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72338);
/* harmony import */ var components_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35643);
/* harmony import */ var _bookmark_toast_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83908);
/* harmony import */ var _bookmark_toast_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bookmark_toast_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const toastActionConfig = {
    add: {
        title: "Bookmark Added",
        descriptionSuffix: "has been added to your bookmarks.",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_add_24__WEBPACK_IMPORTED_MODULE_1__/* .IconBookmarkAdd24 */ .Y, {
            className: (_bookmark_toast_module_css__WEBPACK_IMPORTED_MODULE_4___default().toastIcon)
        })
    },
    remove: {
        title: "Bookmark Removed",
        descriptionSuffix: "has been removed from your bookmarks.",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_bookmark_remove_24__WEBPACK_IMPORTED_MODULE_2__/* .IconBookmarkRemove24 */ .t, {
            className: (_bookmark_toast_module_css__WEBPACK_IMPORTED_MODULE_4___default().toastIcon)
        })
    }
};
function generateToastMessage(actionType, tutorialName) {
    const tutorialNameDefault = "This tutorial";
    return {
        title: toastActionConfig[actionType].title,
        description: `${tutorialName || tutorialNameDefault} ${toastActionConfig[actionType].descriptionSuffix}`,
        icon: toastActionConfig[actionType].icon
    };
}
function makeBookmarkToast(action, tutorialName) {
    (0,components_toast__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .Am)({
        ...generateToastMessage(action, tutorialName),
        autoDismiss: 5000
    });
}


/***/ }),

/***/ 26991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_tile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59665);
/* harmony import */ var _icon_tile_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_tile_module_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * IconTiles are used to represent objects and resources,
 * either unrelated, or directly related to a product.
 *
 * Renders an icon in a brand-colored tile. Note that this IconTile does
 * not fully implement the IconTile component documented in the
 * HashiCorp Design System, as it does not support "secondary" icons.
 *
 * ref: https://www.figma.com/file/noyY6dUMDYjmySpHcMjhkN/HDS-Product---Components-%5BWIP%5D?node-id=1377%3A11992
 */ function IconTile({ children , size ="medium" , brandColor ="neutral" , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_icon_tile_module_css__WEBPACK_IMPORTED_MODULE_2___default().root), (_icon_tile_module_css__WEBPACK_IMPORTED_MODULE_2___default())[`size-${size}`], (_icon_tile_module_css__WEBPACK_IMPORTED_MODULE_2___default())[`color-${brandColor}`], className),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTile);


/***/ }),

/***/ 83628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93265);
/* harmony import */ var _inline_link_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67325);
/* harmony import */ var _inline_link_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inline_link_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



const InlineLink = ({ children , className , href , textSize =300 , textWeight ="regular" , ...rest })=>{
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_inline_link_module_css__WEBPACK_IMPORTED_MODULE_3___default().root), `hds-typography-body-${textSize}`, `hds-font-weight-${textWeight}`, className);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        className: classes,
        href: href,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineLink);


/***/ }),

/***/ 19477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_tutorial_progress_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91097);
/* harmony import */ var lib_learn_client_api_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28802);
/* harmony import */ var _progress_icon_and_label_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69062);
/* harmony import */ var _progress_icon_and_label_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_progress_icon_and_label_module_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



function ProgressIconAndLabel({ status  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: (_progress_icon_and_label_module_css__WEBPACK_IMPORTED_MODULE_3___default().progressIconAndLabel),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorial_progress_icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                status: status,
                size: 14
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_progress_icon_and_label_module_css__WEBPACK_IMPORTED_MODULE_3___default().progressLabel),
                children: (0,lib_learn_client_api_progress__WEBPACK_IMPORTED_MODULE_2__/* .progressStatusToLabel */ .Km)(status)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressIconAndLabel);


/***/ }),

/***/ 21944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ buildAriaLabel),
/* harmony export */   "h": () => (/* binding */ getSpeakableDuration)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ const PRODUCT_LABEL_MAP = {
    boundary: "Boundary",
    consul: "Consul",
    nomad: "Nomad",
    packer: "Packer",
    terraform: "Terraform",
    vault: "Vault",
    vagrant: "Vagrant",
    waypoint: "Waypoint"
};
function getSpeakableDuration(duration) {
    const speakableDuration = duration.replace("hr", " hour").replace("min", " minute");
    return `${speakableDuration} tutorial.`;
}
function buildAriaLabel({ heading , productsUsed , hasVideo , hasInteractiveLab , eyebrowSlotAriaLabel  }) {
    let ariaLabel = "";
    ariaLabel += `${heading}.`;
    if (productsUsed.length > 0) {
        ariaLabel += ` Uses the following products: ${productsUsed.map((p)=>PRODUCT_LABEL_MAP[p]).join(", ")}.`;
    }
    if (hasInteractiveLab) {
        ariaLabel += ` Tutorial has interactive lab.`;
    }
    if (hasVideo) {
        ariaLabel += ` Tutorial has video.`;
    }
    if (eyebrowSlotAriaLabel) {
        ariaLabel += ` ${eyebrowSlotAriaLabel}`;
    }
    return ariaLabel;
}


/***/ }),

/***/ 50370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ formatTutorialCard)
/* harmony export */ });
/* harmony import */ var views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81505);
/* harmony import */ var components_tutorial_meta_components_badges_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95355);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Formats tutorial data for use with the Tutorial Card component.
 */ function formatTutorialCard(tutorial, /**
	 * Optional collection context.
	 * This is used for the tutorial URL, as well as progress display.
	 *
	 * Note that each tutorial has a "default" collection context,
	 * which we use if `collectionContext` is not provided.
	 *
	 * If `collectionContext` is provided, it overrides that default
	 * collection context. Note that `collectionContext` is not validated;
	 * please ensure it corresponds to a valid collection.
	 */ collectionContext) {
    const collection = collectionContext || tutorial.defaultContext;
    return {
        id: tutorial.id,
        collectionId: collection.id,
        description: tutorial.description,
        duration: (0,components_tutorial_meta_components_badges_helpers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(tutorial.readTime),
        hasInteractiveLab: Boolean(tutorial.handsOnLab),
        hasVideo: Boolean(tutorial.video),
        heading: tutorial.name,
        url: (0,views_collection_view_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getTutorialSlug */ .Jc)(tutorial.slug, collection.slug),
        productsUsed: tutorial.productsUsed.map((p)=>p.product.slug)
    };
}


/***/ }),

/***/ 53135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OW": () => (/* reexport safe */ _format_tutorial_card__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   "PR": () => (/* reexport safe */ _build_aria_label__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "h": () => (/* reexport safe */ _build_aria_label__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "mO": () => (/* reexport safe */ _with_auth_elements__WEBPACK_IMPORTED_MODULE_2__.m)
/* harmony export */ });
/* harmony import */ var _build_aria_label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21944);
/* harmony import */ var _format_tutorial_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50370);
/* harmony import */ var _with_auth_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_with_auth_elements__WEBPACK_IMPORTED_MODULE_2__]);
_with_auth_elements__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ TutorialCardWithAuthElements)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37790);
/* harmony import */ var lib_learn_client_api_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28802);
/* harmony import */ var lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64785);
/* harmony import */ var components_bookmark_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73309);
/* harmony import */ var components_card_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4155);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12905);
/* harmony import */ var _components_progress_icon_and_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19477);
/* harmony import */ var _build_aria_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_bookmark_button__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_6__]);
([components_bookmark_button__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








/**
 * Displays a TutorialCard, which shows additional user-data-specific elements
 * for authenticated users.
 */ function TutorialCardWithAuthElements({ id: tutorialId , collectionId , BookmarkButtonComponent =components_bookmark_button__WEBPACK_IMPORTED_MODULE_4__/* .TutorialCardBookmarkButton */ .uw , ...restProps }) {
    /**
	 * Get tutorial progress. Will be undefined if not authenticated.
	 * Note as well that useTutorialProgress depends on AUTH_ENABLED.
	 */ const { tutorialProgressStatus  } = (0,hooks_progress__WEBPACK_IMPORTED_MODULE_1__/* .useTutorialProgress */ .Xm)({
        tutorialId,
        collectionId
    });
    /**
	 * Determine whether to render progress status.
	 * We only show progress for at a minimum state of `in_progress`.
	 */ const isProgressLoaded = typeof tutorialProgressStatus !== "undefined";
    const meetsProgressThreshold = [
        lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .TutorialProgressStatus.in_progress */ .KD.in_progress,
        lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .TutorialProgressStatus.complete */ .KD.complete
    ].includes(tutorialProgressStatus);
    const shouldRenderProgress = isProgressLoaded && meetsProgressThreshold;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...restProps,
        eyebrowSlotAriaLabel: shouldRenderProgress ? (0,lib_learn_client_api_progress__WEBPACK_IMPORTED_MODULE_2__/* .progressStatusToAriaLabel */ .mi)(tutorialProgressStatus) : (0,_build_aria_label__WEBPACK_IMPORTED_MODULE_8__/* .getSpeakableDuration */ .h)(restProps.duration),
        eyebrowSlot: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                shouldRenderProgress ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progress_icon_and_label__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    status: tutorialProgressStatus
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_5__/* .CardEyebrowText */ .VO, {
                    children: restProps.duration
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookmarkButtonComponent, {
                    tutorial: {
                        id: tutorialId,
                        name: restProps.heading
                    }
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "m": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_4__.mO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_card_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88805);
/* harmony import */ var components_card_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4155);
/* harmony import */ var components_tutorial_collection_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(786);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53135);
/* harmony import */ var _tutorial_card_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3859);
/* harmony import */ var _tutorial_card_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tutorial_card_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers__WEBPACK_IMPORTED_MODULE_4__]);
_helpers__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





/**
 * Render a card that links to a tutorial.
 */ function TutorialCard({ url , duration , heading , description , productsUsed , hasVideo , hasInteractiveLab , eyebrowSlot , eyebrowSlotAriaLabel =(0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getSpeakableDuration */ .h)(duration)  }) {
    /**
	 * Build the array of badges to show at the bottom of the card.
	 * Note: may be empty.
	 */ const badges = [
        ...productsUsed
    ];
    if (hasInteractiveLab) {
        badges.push("interactive");
    }
    if (hasVideo) {
        badges.push("video");
    }
    const ariaLabel = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .buildAriaLabel */ .PR)({
        heading,
        duration,
        productsUsed,
        hasVideo,
        hasInteractiveLab,
        eyebrowSlotAriaLabel
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ariaLabel: ariaLabel,
        href: url,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_tutorial_card_module_css__WEBPACK_IMPORTED_MODULE_5___default().root),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_2__/* .CardEyebrow */ .FD, {
                            className: (_tutorial_card_module_css__WEBPACK_IMPORTED_MODULE_5___default().eyebrow),
                            children: eyebrowSlot || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_2__/* .CardEyebrowText */ .VO, {
                                children: duration
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_2__/* .CardTitle */ .ll, {
                            text: heading
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_2__/* .CardDescription */ .SZ, {
                            text: description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_card_components__WEBPACK_IMPORTED_MODULE_2__/* .CardFooter */ .eW, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorial_collection_cards__WEBPACK_IMPORTED_MODULE_3__/* .CardBadges */ .uk, {
                        badges: badges
                    })
                })
            ]
        })
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uk": () => (/* reexport */ CardBadges)
});

// UNUSED EXPORTS: CardBody, CardEyebrow, CardHeading

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59003);
;// CONCATENATED MODULE: ./src/components/tutorial-collection-cards/components/card-heading/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function CardHeading({ text , level , screenReaderOnly  }) {
    const HeadingElement = `h${level}`;
    return /*#__PURE__*/ _jsx(HeadingElement, {
        className: classNames(s.root, screenReaderOnly && "g-screen-reader-only"),
        children: text
    });
}


// EXTERNAL MODULE: ./src/components/truncate-max-lines/index.tsx
var truncate_max_lines = __webpack_require__(19858);
;// CONCATENATED MODULE: ./src/components/tutorial-collection-cards/components/card-body/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function CardBody({ text  }) {
    return /*#__PURE__*/ _jsx("p", {
        className: s.body,
        children: /*#__PURE__*/ _jsx(TruncateMaxLines, {
            maxLines: 3,
            lineHeight: "var(--token-typography-body-100-line-height)",
            children: text
        })
    });
}


;// CONCATENATED MODULE: ./src/components/tutorial-collection-cards/components/card-eyebrow/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function CardEyebrow({ children , className  }) {
    return /*#__PURE__*/ _jsx("span", {
        className: classNames(s.eyebrow, className),
        children: children
    });
}


// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/play-16.tsx
var play_16 = __webpack_require__(3076);
// EXTERNAL MODULE: ./node_modules/@hashicorp/flight-icons/svg-react/terminal-screen-16.tsx
var terminal_screen_16 = __webpack_require__(92714);
// EXTERNAL MODULE: ./src/components/badge/index.tsx
var components_badge = __webpack_require__(42892);
// EXTERNAL MODULE: ./src/components/product-icon/index.tsx
var product_icon = __webpack_require__(70627);
// EXTERNAL MODULE: ./src/components/tutorial-collection-cards/components/card-badges/card-badges.module.css
var card_badges_module = __webpack_require__(39121);
var card_badges_module_default = /*#__PURE__*/__webpack_require__.n(card_badges_module);
// EXTERNAL MODULE: ./src/components/tooltip/index.tsx
var tooltip = __webpack_require__(48418);
;// CONCATENATED MODULE: ./src/components/tutorial-collection-cards/components/card-badges/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






/**
 * Map product badge options to icons
 */ const PRODUCT_ICON_MAP = {
    boundary: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "boundary"
    }),
    consul: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "consul"
    }),
    nomad: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "nomad"
    }),
    packer: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "packer"
    }),
    terraform: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "terraform"
    }),
    vault: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "vault"
    }),
    vagrant: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "vagrant"
    }),
    waypoint: /*#__PURE__*/ jsx_runtime_.jsx(product_icon/* default */.Z, {
        productSlug: "waypoint"
    })
};
/**
 * Map all card badge options to icons
 */ const CARD_BADGE_ICON_MAP = {
    ...PRODUCT_ICON_MAP,
    video: /*#__PURE__*/ jsx_runtime_.jsx(play_16/* IconPlay16 */.C, {}),
    interactive: /*#__PURE__*/ jsx_runtime_.jsx(terminal_screen_16/* IconTerminalScreen16 */.j, {})
};
/**
 * Map product badge options to badge labels
 */ const PRODUCT_LABEL_MAP = {
    boundary: "Boundary",
    consul: "Consul",
    nomad: "Nomad",
    packer: "Packer",
    terraform: "Terraform",
    vault: "Vault",
    vagrant: "Vagrant",
    waypoint: "Waypoint"
};
/**
 * Map all card badge options to badge labels
 */ const CARD_BADGE_LABEL_MAP = {
    ...PRODUCT_LABEL_MAP,
    video: "Video",
    interactive: "Interactive"
};
function CardBadges({ badges  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (card_badges_module_default()).root,
        children: badges.map((badge)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (card_badges_module_default()).listItem,
                children: /*#__PURE__*/ jsx_runtime_.jsx(tooltip/* default */.Z, {
                    label: CARD_BADGE_LABEL_MAP[badge],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_badge/* default */.Z, {
                        ariaLabel: CARD_BADGE_LABEL_MAP[badge],
                        icon: CARD_BADGE_ICON_MAP[badge],
                        size: "small"
                    })
                })
            }, badge);
        })
    });
}


;// CONCATENATED MODULE: ./src/components/tutorial-collection-cards/components/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




;// CONCATENATED MODULE: ./src/components/tutorial-collection-cards/index.tsx
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 



/***/ }),

/***/ 95355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EZ": () => (/* binding */ getIsBeta),
/* harmony export */   "Y$": () => (/* binding */ generateBadges),
/* harmony export */   "ZP": () => (/* binding */ getReadableTime)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_play_16__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3076);
/* harmony import */ var _hashicorp_flight_icons_svg_react_terminal_screen_16__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92714);
/* harmony import */ var lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64785);
/* harmony import */ var components_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42892);
/* harmony import */ var components_product_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70627);
/* harmony import */ var _badges_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81553);
/* harmony import */ var _badges_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_badges_module_css__WEBPACK_IMPORTED_MODULE_6__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const editionDisplayOptions = {
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.openSource */ .ZN.openSource]: "Open Source",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.enterprise */ .ZN.enterprise]: "Enterprise",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.hcp */ .ZN.hcp]: "HCP",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.tfcStandard */ .ZN.tfcStandard]: "Standard",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.tfcPlus */ .ZN.tfcPlus]: "Plus",
    /**
	 * Deprecated pricing tiers as of March '23
	 * To be removed after all content is updated
	 */ [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.tfcFree */ .ZN.tfcFree]: "Terraform Cloud",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.tfcTeam */ .ZN.tfcTeam]: "Team",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.tfcGov */ .ZN.tfcGov]: "Team & Governance",
    [lib_learn_client_types__WEBPACK_IMPORTED_MODULE_3__/* .EditionOption.tfcBiz */ .ZN.tfcBiz]: "Business"
};
/**
 * Calculates whether a tutorial is 'beta' based on productsUsed data.
 */ function getIsBeta(productsUsed) {
    return productsUsed.some(({ isBeta  })=>isBeta);
}
function TutorialMetaBadge(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_badge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props,
        type: "base",
        className: (_badges_module_css__WEBPACK_IMPORTED_MODULE_6___default().badge),
        size: "small"
    });
}
/**
 * Builds the array of <Badge /> components to render.
 */ const generateBadges = ({ edition , hasVideo , isBeta , isInteractive , products  })=>{
    const badges = [];
    if (isBeta) {
        badges.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialMetaBadge, {
            color: "highlight",
            text: "Beta"
        }));
    }
    // Edu team wants to hide the open source badge
    const showEditionBadge = edition !== "open_source";
    if (showEditionBadge) {
        badges.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialMetaBadge, {
            text: editionDisplayOptions[edition]
        }));
    }
    const showProductBadges = Array.isArray(products) && products.length > 0;
    if (showProductBadges) {
        products.forEach((product)=>{
            badges.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialMetaBadge, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_product_icon__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    productSlug: product.slug
                }),
                text: product.name
            }, product.slug));
        });
    }
    if (hasVideo) {
        badges.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialMetaBadge, {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_play_16__WEBPACK_IMPORTED_MODULE_1__/* .IconPlay16 */ .C, {}),
            text: "Video"
        }));
    }
    if (isInteractive) {
        badges.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialMetaBadge, {
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_terminal_screen_16__WEBPACK_IMPORTED_MODULE_2__/* .IconTerminalScreen16 */ .j, {}),
            text: "Interactive"
        }));
    }
    return badges;
};
/**
 * Creates a readable string for presentation only based on the number of
 * minutes provided.
 *
 * For example: 831 => 13hr 51min
 */ function getReadableTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    if (hours && min > 0) {
        return `${hours}hr ${min}min`;
    }
    if (hours) {
        return `${hours}hr`;
    }
    return `${minutes}min`;
}


/***/ }),

/***/ 29591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b3": () => (/* reexport */ useAllBookmarks),
  "AK": () => (/* reexport */ useBookmarkMutations),
  "I9": () => (/* reexport */ useBookmarksByTutorialIds),
  "am": () => (/* reexport */ useIsBookmarked)
});

// EXTERNAL MODULE: external "@tanstack/react-query"
var react_query_ = __webpack_require__(18910);
// EXTERNAL MODULE: ./src/lib/learn-client/index.ts
var learn_client = __webpack_require__(32235);
;// CONCATENATED MODULE: ./src/lib/learn-client/api/bookmark/create-bookmark.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Adds a new bookmark for the given `tutorialId`. If successful, returns the
 * newly created bookmark. Otherwise throws an error.
 *
 * https://digital-api-specs.vercel.app/learn#tag/Bookmarks/paths/~1bookmarks~1{tutorial_id}/post
 */ const createBookmark = async ({ accessToken , tutorialId  })=>{
    // Build the API route to make a request to
    const requestRoute = `${BOOKMARK_API_ROUTE}/${tutorialId}`;
    // Make the POST request
    const requestResult = await (0,learn_client/* post */.v_)(requestRoute, accessToken);
    // Return data as JSON if result is OK
    if (requestResult.ok) {
        const { result  } = await requestResult.json();
        return result;
    }
    // Throw an error if result is not OK
    const error = await (0,learn_client/* toError */.KC)(requestResult);
    throw error;
};


;// CONCATENATED MODULE: ./src/lib/learn-client/api/bookmark/delete-bookmark.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Deletes the bookmark for the given `tutorialId`. If successful, returns
 * nothing. Otherwise throws an error.
 *
 * https://digital-api-specs.vercel.app/learn#tag/Bookmarks/paths/~1bookmarks~1{tutorial_id}/delete
 */ const deleteBookmark = async ({ accessToken , tutorialId  })=>{
    // Build the API route to make a request to
    const requestRoute = `${BOOKMARK_API_ROUTE}/${tutorialId}`;
    // Make the DELETE request
    const requestResult = await (0,learn_client/* destroy */.ob)(requestRoute, accessToken);
    // Return if result is OK
    if (requestResult.ok) {
        return;
    }
    // Throw an error if result is not OK
    const error = await (0,learn_client/* toError */.KC)(requestResult);
    throw error;
};


;// CONCATENATED MODULE: ./src/lib/learn-client/api/bookmark/get-all-bookmarks.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Fetches all bookmarks for the current user. If successful, returns an array
 * of bookmark objects. Otherwise throws an error.
 *
 * https://digital-api-specs.vercel.app/learn#tag/Bookmarks/paths/~1bookmarks/get
 */ const getAllBookmarks = async ({ accessToken  })=>{
    // Make the GET request
    const requestResult = await (0,learn_client/* get */.U2)(BOOKMARK_API_ROUTE, accessToken);
    // Return data as JSON if result is OK
    if (requestResult.ok) {
        const { result  } = await requestResult.json();
        return result;
    }
    // Throw an error if result is not OK
    const error = await (0,learn_client/* toError */.KC)(requestResult);
    throw error;
};


;// CONCATENATED MODULE: ./src/lib/learn-client/api/bookmark/get-bookmark.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Fetches a bookmark for the given `tutorialId`. If a bookmark is found, then
 * it is returned. If no bookmark is found, then `null` is returned. Otherwise
 * throws an error.
 *
 * https://digital-api-specs.vercel.app/learn#tag/Bookmarks/paths/~1bookmarks~1{tutorial_id}/get
 */ const getBookmark = async ({ accessToken , tutorialId  })=>{
    // Build the API route to make a request to
    const requestRoute = `${BOOKMARK_API_ROUTE}/${tutorialId}`;
    // Make the GET request
    const requestResult = await (0,learn_client/* get */.U2)(requestRoute, accessToken);
    // Return null if the request status is 404
    if (requestResult.status === 404) {
        return null;
    }
    // Return data as JSON if result is OK
    if (requestResult.ok) {
        const { result  } = await requestResult.json();
        return result;
    }
    // Throw an error if result is not OK
    const error = await (0,learn_client/* toError */.KC)(requestResult);
    throw error;
};


;// CONCATENATED MODULE: ./src/lib/learn-client/api/bookmark/get-bookmarks-by-tutorial-ids.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 

/**
 * Fetches bookmarks for the given `tutorialIds`. If successful, returns an
 * array of bookmark objects. Otherwise throws an error.
 *
 * https://digital-api-specs.vercel.app/learn#tag/Bookmarks/paths/~1bookmarks/get
 */ const getBookmarksByTutorialIds = async ({ accessToken , tutorialIds  })=>{
    // Build the API route to make a request to
    const commaSeparatedIds = tutorialIds.join(",");
    const requestRoute = `${BOOKMARK_API_ROUTE}?tutorialIds=${commaSeparatedIds}`;
    // Make the GET request
    const requestResult = await (0,learn_client/* get */.U2)(requestRoute, accessToken);
    // Return data as JSON if result is OK
    if (requestResult.ok) {
        const { result  } = await requestResult.json();
        return result;
    }
    // Throw an error if result is not OK
    const error = await (0,learn_client/* toError */.KC)(requestResult);
    throw error;
};


;// CONCATENATED MODULE: ./src/lib/learn-client/api/bookmark/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




const BOOKMARK_API_ROUTE = "/bookmarks";


// EXTERNAL MODULE: ./src/hooks/use-authentication/index.ts + 5 modules
var use_authentication = __webpack_require__(66245);
;// CONCATENATED MODULE: ./src/hooks/bookmarks/use-all-bookmarks.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Handles fetching and storing all bookmarks with React Query.
 */ const useAllBookmarks = ({ enabled =true  })=>{
    // Get the current Query Client
    const queryClient = (0,react_query_.useQueryClient)();
    // Get the current user's access token
    const { isAuthenticated , session  } = (0,use_authentication/* default */.Z)();
    const accessToken = session?.accessToken;
    const isEnabled = enabled && isAuthenticated && !!accessToken;
    // Set up the `onSuccess` callback
    const onSuccess = (data)=>{
        // Prime each individual bookmark query by tutorial id
        data.forEach((bookmark)=>{
            queryClient.setQueryData([
                "isBookmarked",
                bookmark.tutorial_id
            ], true);
        });
    };
    // Fetch all bookmarks with the access token
    const { data: bookmarks , ...restQueryResult } = (0,react_query_.useQuery)([
        "bookmarks"
    ], ()=>getAllBookmarks({
            accessToken
        }), {
        enabled: isEnabled,
        onSuccess
    });
    return {
        bookmarks,
        ...restQueryResult
    };
};


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./src/components/toast/index.tsx + 3 modules
var toast = __webpack_require__(35643);
;// CONCATENATED MODULE: ./src/hooks/bookmarks/use-bookmark-mutations.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/**
 * Handles creating the mutations methods for adding and removing bookmarks with
 * React Query. Returns one callback for each mutation.
 */ const useBookmarkMutations = ()=>{
    const queryClient = (0,react_query_.useQueryClient)();
    const { session  } = (0,use_authentication/* default */.Z)();
    const accessToken = session?.accessToken;
    /**
	 * Set up `onSuccess` callback for the create/delete mutations.
	 */ const makeOnMutationSuccess = (mutationType)=>{
        return (_, mutationVariables)=>{
            // Pull the modified bookmark's `tutorialId`
            const mutatedTutorialId = mutationVariables.tutorialId;
            // Determine if the tutorial is now bookmarked
            let isNowBookmarked = false;
            if (mutationType === "add") {
                isNowBookmarked = true;
            }
            // Update/create the `isBookmarked` cache entry for this tutorial id
            queryClient.setQueryData([
                "isBookmarked",
                mutatedTutorialId
            ], isNowBookmarked);
            // Invalidate `bookmarks` so they're refetched in the background
            queryClient.invalidateQueries([
                "bookmarks"
            ]);
        };
    };
    // TODO expose an new error object in the bookmark API functions
    const makeOnError = (method)=>{
        return (error)=>{
            if (error.message === "401 Unauthorized") {
                (0,toast/* developmentToast */.GN)({
                    color: toast/* ToastColor.critical */.PQ.critical,
                    title: "TODO",
                    description: `Show a modal on \`${method}\` if not authenticated`
                });
            }
        };
    };
    /**
	 * Set up `addBookmark` callback.
	 */ const addBookmarkMutation = (0,react_query_.useMutation)(createBookmark, {
        onSuccess: makeOnMutationSuccess("add"),
        onError: makeOnError("addBookmark")
    });
    const addBookmark = (0,external_react_.useCallback)((tutorialId, options = {})=>{
        addBookmarkMutation.mutate({
            accessToken,
            tutorialId
        }, options);
    }, [
        addBookmarkMutation,
        accessToken
    ]);
    /**
	 * Set up `removeBookmark` callback.
	 */ const removeBookmarkMutation = (0,react_query_.useMutation)(deleteBookmark, {
        onSuccess: makeOnMutationSuccess("remove"),
        onError: makeOnError("removeBookmark")
    });
    const removeBookmark = (0,external_react_.useCallback)((tutorialId, options = {})=>{
        removeBookmarkMutation.mutate({
            accessToken,
            tutorialId
        }, options);
    }, [
        accessToken,
        removeBookmarkMutation
    ]);
    return {
        addBookmark,
        removeBookmark
    };
};


;// CONCATENATED MODULE: ./src/hooks/bookmarks/use-bookmarks-by-tutorial-ids.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Handles fetching and storing bookmarks with React Query for the given
 * `tutorialIds`.
 */ const useBookmarksByTutorialIds = ({ enabled =true , tutorialIds  })=>{
    // Get the current Query Client
    const queryClient = (0,react_query_.useQueryClient)();
    // Get the current user's access token
    const { isAuthenticated , session  } = (0,use_authentication/* default */.Z)();
    const accessToken = session?.accessToken;
    const isEnabled = enabled && isAuthenticated && !!accessToken;
    // Set up the `onSuccess` callback
    const onSuccess = (data)=>{
        // Prime each individual `isBookmarked` query by tutorial id
        tutorialIds.forEach((tutorialId)=>{
            const isBookmarked = !!data.find((bookmark)=>bookmark.tutorial_id === tutorialId);
            queryClient.setQueryData([
                "isBookmarked",
                tutorialId
            ], isBookmarked);
        });
    };
    // Fetch bookmarks for the given tutorial ids with the access token
    const { data: bookmarks , ...restQueryResult } = (0,react_query_.useQuery)([
        "bookmarks",
        {
            tutorialIds
        }
    ], ()=>getBookmarksByTutorialIds({
            accessToken,
            tutorialIds
        }), {
        enabled: isEnabled,
        onSuccess
    });
    return {
        bookmarks,
        ...restQueryResult
    };
};


;// CONCATENATED MODULE: ./src/hooks/bookmarks/use-is-bookmarked.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


/**
 * Handles checking if there is a bookmark for the given `tutorialId`.
 */ const useIsBookmarked = ({ tutorialId  })=>{
    // Get the current user's access token
    const { isAuthenticated , session  } = (0,use_authentication/* default */.Z)();
    const accessToken = session?.accessToken;
    // Fetch a single bookmark by tutorial id
    const { data: isBookmarked , ...restQueryResult } = (0,react_query_.useQuery)([
        "isBookmarked",
        tutorialId
    ], ()=>getBookmark({
            accessToken,
            tutorialId
        }).then((bookmark)=>!!bookmark), {
        enabled: isAuthenticated && !!accessToken
    });
    return {
        isBookmarked,
        ...restQueryResult
    };
};


;// CONCATENATED MODULE: ./src/hooks/bookmarks/index.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






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

/***/ 46149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        defaultContext: (0,_tutorial_formatting__WEBPACK_IMPORTED_MODULE_0__/* .formatToCollectionLite */ .je)(default_collection)
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

"use strict";

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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lf": () => (/* binding */ formatHandsOnLab),
/* harmony export */   "Oz": () => (/* binding */ formatVideo),
/* harmony export */   "je": () => (/* binding */ formatToCollectionLite),
/* harmony export */   "ri": () => (/* binding */ formatTutorialData)
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

/***/ 65394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 81141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ stripUndefinedProperties)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Hack needed to avoid JSON-Serialization validation error from Next.js.
 * https://github.com/zeit/next.js/discussions/11209
 *
 * Reason: `undefined` cannot be serialized as JSON.
 * Please use `null` or omit this value all together.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function stripUndefinedProperties(obj) {
    return JSON.parse(JSON.stringify(obj));
}


/***/ }),

/***/ 39761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var lib_get_product_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95655);
/* harmony import */ var views_collection_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22309);
/* harmony import */ var views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_collection_view__WEBPACK_IMPORTED_MODULE_1__]);
views_collection_view__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


async function getStaticPaths() {
    const paths = await (0,views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getCollectionPagePaths */ .Bh)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const { collectionSlug , productSlug  } = params;
    const productData = (0,lib_get_product_data__WEBPACK_IMPORTED_MODULE_0__/* .cachedGetProductData */ .i)(productSlug);
    const props = await (0,views_collection_view_server__WEBPACK_IMPORTED_MODULE_2__/* .getCollectionPageProps */ .Ry)(productData, collectionSlug);
    // If the collection doesn't exist, hit the 404
    if (!props) {
        return {
            notFound: true
        };
    }
    return props;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views_collection_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectionMeta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hashicorp_flight_icons_svg_react_collections_24__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59231);
/* harmony import */ var hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66245);
/* harmony import */ var components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14617);
/* harmony import */ var components_icon_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26991);
/* harmony import */ var components_inline_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83628);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33356);
/* harmony import */ var components_collection_progress_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25828);
/* harmony import */ var _collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19654);
/* harmony import */ var _collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 








function CollectionMeta({ heading , description , collection  }) {
    /**
	 * We only need to show the Create Account CTA if auth is enabled and there is
	 * not already a user authenticated.
	 */ const { isAuthenticated , isLoading  } = (0,hooks_use_authentication__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const showCreateAccountCta = !isLoading && !isAuthenticated;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_icon_tile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_flight_icons_svg_react_collections_24__WEBPACK_IMPORTED_MODULE_1__/* .IconCollections24 */ .t, {
                    className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                level: 1,
                size: 600,
                weight: "bold",
                id: heading.id,
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
                children: heading.text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
                dangerouslySetInnerHTML: {
                    __html: description
                }
            }),
            showCreateAccountCta ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().createAccountCta),
                size: 200,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_inline_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: "/sign-up",
                        textSize: 200,
                        children: "Create an account"
                    }),
                    " ",
                    "to track your progress."
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_collection_meta_module_css__WEBPACK_IMPORTED_MODULE_8___default().cta),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_collection_progress_group__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Co, {
                    collection: collection
                })
            })
        ]
    });
}


/***/ }),

/***/ 74893:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46833);
/* harmony import */ var _collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81661);
/* harmony import */ var _collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__]);
components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 


function CollectionTutorialList({ tutorials , isOrdered  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_collection_tutorial_list_module_css__WEBPACK_IMPORTED_MODULE_2___default().root),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_cards_grid_list__WEBPACK_IMPORTED_MODULE_1__/* .TutorialCardsGridList */ .b, {
            fixedColumns: isOrdered ? 1 : null,
            isOrdered: isOrdered,
            tutorials: tutorials
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionTutorialList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 22309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64884);
/* harmony import */ var components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12871);
/* harmony import */ var components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98302);
/* harmony import */ var _components_collection_meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72739);
/* harmony import */ var _components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74893);
/* harmony import */ var components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53135);
/* harmony import */ var _helpers_generate_collection_sidebar_nav_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58919);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__, _components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__]);
([layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__, _components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__, components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







function CollectionView({ collection , layoutProps , product  }) {
    const { name , description , tutorials , ordered  } = collection;
    const sidebarNavDataLevels = [
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_2__/* .generateTopLevelSidebarNavData */ .Vz)(product.name),
        (0,components_sidebar_helpers__WEBPACK_IMPORTED_MODULE_2__/* .generateProductLandingSidebarNavData */ ._G)(product),
        (0,_helpers_generate_collection_sidebar_nav_data__WEBPACK_IMPORTED_MODULE_7__/* .generateCollectionSidebarNavData */ .E)(product, layoutProps.sidebarSections)
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layouts_sidebar_sidecar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        breadcrumbLinks: layoutProps.breadcrumbLinks,
        AlternateSidebar: components_tutorials_sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        /**
			 * @TODO remove casting to `any`. Will require refactoring both
			 * `generateTopLevelSidebarNavData` and
			 * `generateProductLandingSidebarNavData` to set up `menuItems` with the
			 * correct types. This will require chaning many files, so deferring for
			 * a follow-up PR since this is functional for the time being.
			 */ sidebarNavDataLevels: sidebarNavDataLevels,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                collection: collection,
                // Note: id is passed here because it is required by <Heading />,
                // it's not used for #anchor linking since there is no sidecar.
                heading: {
                    text: name,
                    id: collection.id
                },
                description: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_collection_tutorial_list__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOrdered: ordered,
                tutorials: tutorials.map((t)=>(0,components_tutorial_card_helpers__WEBPACK_IMPORTED_MODULE_6__/* .formatTutorialCard */ .OW)(t, collection))
            })
        ]
    });
}
CollectionView.contentType = "tutorials";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ getCollectionPagePaths),
/* harmony export */   "Dz": () => (/* binding */ getCollectionViewSidebarSections),
/* harmony export */   "Ry": () => (/* binding */ getCollectionPageProps)
/* harmony export */ });
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52591);
/* harmony import */ var moize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73450);
/* harmony import */ var views_tutorial_view_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49827);
/* harmony import */ var lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81141);
/* harmony import */ var lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98519);
/* harmony import */ var views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10853);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81505);
/* harmony import */ var _product_tutorials_view_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18979);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 







const moizeOpts = {
    isPromise: true,
    maxSize: Infinity,
    isDeepEqual: true
};
// limit the expensive call for collections who all have the same product
const cachedGetAllCollections = moize__WEBPACK_IMPORTED_MODULE_0___default()(lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__/* .getAllCollections */ .Lg, moizeOpts);
async function getCollectionViewSidebarSections(productSlug, collection) {
    let sidebarSections;
    /**
	 * Note that `hcp` is a "product" in Dev Dot but not in Learn,
	 * so we do some branching.
	 */ if (productSlug == "hcp") {
        const allHcpCollections = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__/* .getCollectionsBySection */ .Jz)("cloud");
        sidebarSections = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .buildCategorizedHcpSidebar */ .Fi)(allHcpCollections, collection.slug);
    } else {
        const allProductCollections = await cachedGetAllCollections({
            product: {
                slug: productSlug,
                sidebarSort: true
            }
        });
        const filteredCollections = (0,_product_tutorials_view_helpers__WEBPACK_IMPORTED_MODULE_5__/* .filterCollections */ .$)(allProductCollections, productSlug);
        sidebarSections = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .formatSidebarCategorySections */ .Jd)(filteredCollections, collection.slug);
    }
    return sidebarSections;
}
/**
 * Given a ProductData object (imported from src/data JSON files) and a
 * Collection slug, fetches and returns the page props for
 * `/{productSlug}/tutorials/{collectionSlug}` pages.
 *
 * Returns the given ProductData object unmodified as the `product` page prop,
 * which is needed for other areas of the app to function.
 */ async function getCollectionPageProps(product, slug) {
    // product.slug may be "hcp", needs to be "cloud" for Learn API use
    const learnProductSlug = (0,lib_tutorials_normalize_product_like_slug__WEBPACK_IMPORTED_MODULE_3__/* .normalizeSlugForTutorials */ .a)(product.slug);
    const collection = await (0,lib_learn_client_api_collection__WEBPACK_IMPORTED_MODULE_1__/* .getCollection */ ._N)(`${learnProductSlug}/${slug}`);
    // if null the api encountered a 404
    if (collection === null) {
        return null;
    }
    const layoutProps = {
        breadcrumbLinks: (0,views_tutorial_view_utils_get_tutorials_breadcrumb__WEBPACK_IMPORTED_MODULE_6__/* .getTutorialsBreadcrumb */ .Y)({
            product: {
                name: product.name,
                filename: product.slug
            },
            collection: {
                name: collection.shortName,
                filename: (0,views_tutorial_view_utils__WEBPACK_IMPORTED_MODULE_2__/* .splitProductFromFilename */ .fI)(collection.slug)
            }
        }),
        sidebarSections: await getCollectionViewSidebarSections(product.slug, collection)
    };
    return {
        props: (0,lib_strip_undefined_props__WEBPACK_IMPORTED_MODULE_7__/* .stripUndefinedProperties */ .c)({
            metadata: {
                title: collection.shortName,
                description: collection.description
            },
            collection: collection,
            product,
            layoutProps
        })
    };
}
/**
 * These paths are built with the collection slug as context for truth.
 * We build the path using the collection's product association for the proper slug context.
 * Original Collection Slug — :productSlug/:collectionFilename
 * Final route — :productSlug/tutorials/:collectionFilename
 */ async function getCollectionPagePaths() {
    const collections = await cachedGetAllCollections();
    const paths = [];
    collections.forEach((collection)=>{
        // assuming slug structure of :product/:filename
        const [collectionProductSlug, filename] = collection.slug.split("/");
        const productSlug = collectionProductSlug === "cloud" ? "hcp" : collectionProductSlug;
        /**
		 * Only build collections where the `productSlug` is a valid beta product.
		 * As well, for all non-HCP products, only build collections where
		 * `theme` matches the `productSlug`.
		 *
		 * Once all products are 'onboarded' we can remove this filtering layer
		 * for the beta products.
		 *
		 * @TODO once we implement the `theme` query option, remove the theme filtering
		 * https://app.asana.com/0/1201903760348480/1201932088801131/f
		 */ const isCloud = collectionProductSlug == "cloud";
        const themeMatches = collectionProductSlug === collection.theme;
        const shouldBuildCollectionPath = isCloud || themeMatches;
        if (shouldBuildCollectionPath) {
            paths.push({
                params: {
                    productSlug,
                    collectionSlug: filename
                }
            });
        }
    });
    return paths;
}


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

/***/ 73673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 57026:
/***/ ((module) => {

"use strict";
module.exports = require("validator/lib/isUUID");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,3272,7791,7184,9146,3643,2067,453,7152,9231,5703,1505,5623,9670,4884,8418,6415,4717], () => (__webpack_exec__(39761)));
module.exports = __webpack_exports__;

})();