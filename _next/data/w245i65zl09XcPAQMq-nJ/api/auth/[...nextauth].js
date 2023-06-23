"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 24295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: external "@vercel/fetch"
var fetch_ = __webpack_require__(33666);
var fetch_default = /*#__PURE__*/__webpack_require__.n(fetch_);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
// EXTERNAL MODULE: ./src/types/auth.ts
var auth = __webpack_require__(84324);
;// CONCATENATED MODULE: ./src/lib/auth/cloud-idp-provider.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * A custom next-auth provider to authenticate via HashiCorp's Cloud IDP service
 */ const CloudIdpProvider = {
    id: auth/* ValidAuthProviderId.CloudIdp */.I.CloudIdp,
    name: "Cloud IDP",
    type: "oauth",
    wellKnown: "https://auth.idp.hcp.dev" + "/.well-known/openid-configuration",
    authorization: {
        params: {
            scope: "openid offline_access"
        }
    },
    idToken: true,
    checks: [
        "pkce",
        "state"
    ],
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    client: {
        name: "HashiCorp Developer",
        token_endpoint_auth_method: "client_secret_post"
    },
    profile (profile) {
        return {
            id: profile.sub,
            ...profile
        };
    }
};
/* harmony default export */ const cloud_idp_provider = (CloudIdpProvider);

;// CONCATENATED MODULE: ./src/lib/auth/refresh-token-set.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ /**
 * Takes a refresh token, and returns a refreshed tokenSet.
 *
 * Adapted from: https://next-auth.js.org/tutorials/refresh-token-rotation#server-side
 */ async function refreshTokenSet(refreshToken) {
    try {
        const url = new URL("/oauth2/token", "https://auth.idp.hcp.dev");
        const response = await fetch(url.toString(), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            body: new URLSearchParams({
                client_id: process.env.AUTH_CLIENT_ID,
                client_secret: process.env.AUTH_CLIENT_SECRET,
                grant_type: "refresh_token",
                refresh_token: refreshToken
            })
        });
        const refreshedTokenset = await response.json();
        if (!response.ok) {
            throw refreshedTokenset;
        }
        return refreshedTokenset;
    } catch (error) {
        console.log("refreshTokenSet error", error);
        throw error;
    }
}

;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
;// CONCATENATED MODULE: ./src/lib/auth/is-jwt-expired.ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
/**
 * Returns a tuple of the if the jwt is expired, and the number of seconds until expiry.
 * If expired, the number of seconds will be negative.
 */ function isJwtExpired(jwt) {
    const nowS = Date.now() / 1000;
    const jwtPayload = (0,external_jsonwebtoken_namespaceObject.decode)(jwt, {
        json: true
    });
    if (!jwtPayload) {
        throw new Error("isJwtExpired failed to parse jwt");
    }
    const { exp  } = jwtPayload;
    return [
        nowS > exp,
        Math.floor(exp - nowS)
    ];
}

;// CONCATENATED MODULE: ./src/pages/api/auth/[...nextauth].ts
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 






const _nextauth_fetch = fetch_default()();
const isDev = "production" === "development";
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        maxAge: 2592000
    },
    // https://next-auth.js.org/configuration/options#events
    events: {
        /**
		 * NOTE: NextAuth does not log out of auth providers, so we have to handle doing that
		 * ourselves in this signOut event.
		 * https://github.com/nextauthjs/next-auth/discussions/3938
		 */ async signOut ({ token  }) {
            if (isDev) {
                console.log("Inside of NextAuth.events.signOut");
            }
            try {
                // Fetch the wellknown configuration
                const wellKnownConfiguration = await (await _nextauth_fetch(cloud_idp_provider.wellKnown)).json();
                // Pull the end_session_endpoint value
                const endSessionEndpoint = wellKnownConfiguration.end_session_endpoint;
                // Construct the full URL to end the session
                const endSessionUrl = new external_url_namespaceObject.URL(endSessionEndpoint);
                const idToken = token.id_token;
                endSessionUrl.searchParams.set("id_token_hint", idToken);
                // Fetch to hit the end session endpoint
                await _nextauth_fetch(endSessionUrl.toString());
            } catch (e) {
                console.error("[NextAuth] There was an error in the `signOut` event:", e);
            }
        }
    },
    providers: [
        cloud_idp_provider
    ],
    callbacks: {
        /**
		 * This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
		 *
		 * ref: https://next-auth.js.org/configuration/callbacks#jwt-callback
		 */ async jwt ({ token , account , profile  }) {
            const isInitial = !!account && !!profile;
            isDev && console.log("jwt callback (%s)", isInitial ? "initial" : "subsequent");
            // initial call during sign in
            if (isInitial) {
                // persist access_token, refresh_token, and id_token on the session token
                // id_token is needed for the signOut event above
                token.access_token = account.access_token;
                token.refresh_token = account.refresh_token;
                token.id_token = account.id_token;
                // Picture is passed to session.user.image
                token.picture = profile.picture;
                token.nickname = profile.nickname;
                return token;
            }
            // subsequent calls when session is accessed
            const [isAccessTokenExpired, secondsUntilExpiry] = isJwtExpired(token.access_token);
            if (isAccessTokenExpired) {
                // Refresh token set w/ refreshToken
                try {
                    isDev && console.log("access token has expired; refreshing...");
                    const { access_token , refresh_token  } = await refreshTokenSet(token.refresh_token);
                    isDev && console.log("successfully refreshed token set");
                    token.access_token = access_token;
                    token.refresh_token = refresh_token;
                } catch (err) {
                    console.error(`${auth/* AuthErrors.RefreshAccessTokenError */.C.RefreshAccessTokenError}: failed to refresh token set`, err);
                    return {
                        ...token,
                        error: auth/* AuthErrors.RefreshAccessTokenError */.C.RefreshAccessTokenError
                    };
                }
            } else {
                // Noop; log time until expiry
                isDev && console.log("access token still valid for %d seconds", secondsUntilExpiry);
            }
            return token;
        },
        /**
		 * The session callback is called whenever a session is checked. By default, only a subset of the token is returned for increased security.
		 *
		 * ref: https://next-auth.js.org/configuration/callbacks#session-callback
		 */ async session ({ session , token  }) {
            return {
                ...session,
                accessToken: token.access_token,
                id: token.sub,
                user: {
                    ...session.user,
                    nickname: token.nickname
                },
                error: token.error
            };
        }
    }
}));


/***/ }),

/***/ 84324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ AuthErrors),
/* harmony export */   "I": () => (/* binding */ ValidAuthProviderId)
/* harmony export */ });
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ var ValidAuthProviderId;
(function(ValidAuthProviderId) {
    ValidAuthProviderId["CloudIdp"] = "cloud-idp";
})(ValidAuthProviderId || (ValidAuthProviderId = {}));
var AuthErrors;
(function(AuthErrors) {
    AuthErrors[// NOTE: temporary prefix of [next-auth] for existing log monitor
    // TODO: abstract logging so everything is grouped
    "RefreshAccessTokenError"] = "[next-auth] RefreshAccessTokenError";
    AuthErrors["RefreshAccessTokenExpiredError"] = "[next-auth] RefreshAccessTokenError: token_inactive";
})(AuthErrors || (AuthErrors = {}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(24295));
module.exports = __webpack_exports__;

})();