globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-B4Op-L9Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1493-O977gKdyomIFbFjXh2wF3P19jzc\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 5267,
		"path": "../public/assets/about-B4Op-L9Y.js"
	},
	"/assets/arrow-left-BlGNO1nX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-b6i7wDEKDbLPEgQZ/c3iNalKce4\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BlGNO1nX.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"9a8-UrCgciN0L/CQtiGjjwshBlR0vSE\"",
		"mtime": "2026-07-01T11:52:41.735Z",
		"size": 2472,
		"path": "../public/favicon.ico"
	},
	"/assets/arrow-up-right-Ddn0ZtKS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-DJhivh14aCmWIkeXqMDAO1kXLC0\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-Ddn0ZtKS.js"
	},
	"/assets/alveo-BykhZO8b.png": {
		"type": "image/png",
		"etag": "\"7e36-QUM3WkN+rFUjNXmW3TdiMVrBDsE\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 32310,
		"path": "../public/assets/alveo-BykhZO8b.png"
	},
	"/assets/avida-BPfWKIST.png": {
		"type": "image/png",
		"etag": "\"4eb8-qq63mM2xR9F/ZvzGAqj1R1zUNuo\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 20152,
		"path": "../public/assets/avida-BPfWKIST.png"
	},
	"/assets/admin-DQ0g2b_n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f10-LXihU9+hDIAiH/pxP50skz1eUKs\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 24336,
		"path": "../public/assets/admin-DQ0g2b_n.js"
	},
	"/assets/bpi-abLcQ7dU.png": {
		"type": "image/png",
		"etag": "\"f9b6-fihhZCWbbhvwRv0E78j0JeCl32U\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 63926,
		"path": "../public/assets/bpi-abLcQ7dU.png"
	},
	"/assets/bdo-BBnciTDa.png": {
		"type": "image/png",
		"etag": "\"947c-24+4D4qkchQXfbhsAwwQuf32EjI\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 38012,
		"path": "../public/assets/bdo-BBnciTDa.png"
	},
	"/assets/cicerra-logo-BJHS7ZqX.png": {
		"type": "image/png",
		"etag": "\"1aeb7-JeJkChep+Ju8JDM6zndKs7Cerl8\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 110263,
		"path": "../public/assets/cicerra-logo-BJHS7ZqX.png"
	},
	"/assets/client-2-CKQHSweL.jpg": {
		"type": "image/jpeg",
		"etag": "\"523d-1KPuZcfm3kTBp+ZU2E+KmFmeWuo\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 21053,
		"path": "../public/assets/client-2-CKQHSweL.jpg"
	},
	"/assets/about-DhulbWnH.jpg": {
		"type": "image/jpeg",
		"etag": "\"56059-9pO89I0C99cs5K3JTrLvgc0gMJ4\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 352345,
		"path": "../public/assets/about-DhulbWnH.jpg"
	},
	"/assets/client-1-9g4PzXB-.jpg": {
		"type": "image/jpeg",
		"etag": "\"643e-3t/fk9h+Ug6c9ZbhI2jCqfAgvAY\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 25662,
		"path": "../public/assets/client-1-9g4PzXB-.jpg"
	},
	"/assets/contact-DomOP5UV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17cc-wB9Qe79+H26ezEInia2xp9FnJjg\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 6092,
		"path": "../public/assets/contact-DomOP5UV.js"
	},
	"/assets/client-3-CQyQcdkE.jpg": {
		"type": "image/jpeg",
		"etag": "\"72cf-UoGTw/gfB0mSt0Mmv8+1OZWj8KE\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 29391,
		"path": "../public/assets/client-3-CQyQcdkE.jpg"
	},
	"/assets/createLucideIcon-B4mn4Xyt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"340e-z+BkpXehSx6ZY6Cl7pkYe6b+9xk\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 13326,
		"path": "../public/assets/createLucideIcon-B4mn4Xyt.js"
	},
	"/assets/cta-C3PfduO0.jpg": {
		"type": "image/jpeg",
		"etag": "\"20377-aBQvGROKKyfrvgCERnIre1rzKzE\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 131959,
		"path": "../public/assets/cta-C3PfduO0.jpg"
	},
	"/assets/hero-B8731I9T.jpg": {
		"type": "image/jpeg",
		"etag": "\"36c03-SLedXG/Q32tEps2Tfn/r3msTqK8\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 224259,
		"path": "../public/assets/hero-B8731I9T.jpg"
	},
	"/assets/properties-DT9HOHUb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f6-i0rzvxpSCq63MeJhoCfXHLTNPGI\"",
		"mtime": "2026-07-01T12:42:21.736Z",
		"size": 2294,
		"path": "../public/assets/properties-DT9HOHUb.js"
	},
	"/assets/megaworld-aXPpkdAN.png": {
		"type": "image/png",
		"etag": "\"15bc9-Zi78gcjhmJwqqE/mW+RnDT5elUE\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 89033,
		"path": "../public/assets/megaworld-aXPpkdAN.png"
	},
	"/assets/properties-Bl-pFDYM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2473-gdVMCD4kS/b8MGjvcitvqL5wE1M\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 9331,
		"path": "../public/assets/properties-Bl-pFDYM.js"
	},
	"/assets/property-2-iAvTJgWd.jpg": {
		"type": "image/jpeg",
		"etag": "\"260d7-o8YZfqx8aDgP5YscYT3TqFVEw6M\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 155863,
		"path": "../public/assets/property-2-iAvTJgWd.jpg"
	},
	"/assets/property-1-JrOWlfk3.jpg": {
		"type": "image/jpeg",
		"etag": "\"37f18-dim5EbulxE6IkylmhvlSGh+wjmM\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 229144,
		"path": "../public/assets/property-1-JrOWlfk3.jpg"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"ddff1-ETFK6r/8SOeeZFiD09klMkkq2Rw\"",
		"mtime": "2026-07-01T11:52:41.745Z",
		"size": 909297,
		"path": "../public/favicon.png"
	},
	"/assets/index-bDTgjrY_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8991d-cA68YhLTixYFLEDhDn0cbPc5DHk\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 563485,
		"path": "../public/assets/index-bDTgjrY_.js"
	},
	"/assets/property-3-CTlwu6oG.jpg": {
		"type": "image/jpeg",
		"etag": "\"20c66-FeBtJm6nSG9iCKrwl5AcC/yXFUo\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 134246,
		"path": "../public/assets/property-3-CTlwu6oG.jpg"
	},
	"/assets/property-4-BS6RCebc.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b05-VedJgMw2IOgv478qUCDOCHjbSHk\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 211717,
		"path": "../public/assets/property-4-BS6RCebc.jpg"
	},
	"/assets/property-5-BkRuihBW.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b67c-KCZRqLIRNhipfEihCJ29KUKlVIw\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 112252,
		"path": "../public/assets/property-5-BkRuihBW.jpg"
	},
	"/assets/Reveal-DtJpQVLi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1af-2E57SnloJFgTEUxoqL3gKp9D6pk\"",
		"mtime": "2026-07-01T12:42:21.727Z",
		"size": 431,
		"path": "../public/assets/Reveal-DtJpQVLi.js"
	},
	"/assets/rockwell-DZzftB1S.png": {
		"type": "image/png",
		"etag": "\"21bc-XHomDcKlDwrXy74aIBSDkcR1qr8\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 8636,
		"path": "../public/assets/rockwell-DZzftB1S.png"
	},
	"/assets/rcbc-qKKHz8VG.png": {
		"type": "image/png",
		"etag": "\"113b6-o8tL2mV2Oz19tlN8r2giUsoNKxw\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 70582,
		"path": "../public/assets/rcbc-qKKHz8VG.png"
	},
	"/assets/routes-BtWc8p9P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c59-ojlb+rSyOlYdC0ZkPVy75dxvgKs\"",
		"mtime": "2026-07-01T12:42:21.740Z",
		"size": 27737,
		"path": "../public/assets/routes-BtWc8p9P.js"
	},
	"/assets/property-6-p0sDhP67.jpg": {
		"type": "image/jpeg",
		"etag": "\"48d04-4nvPmPv6fAeaBUoxY9/dk86IwPQ\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 298244,
		"path": "../public/assets/property-6-p0sDhP67.jpg"
	},
	"/assets/ryan-arms-crossed-DlGMsC8z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e-WjrGXP6qbM2E/dfwdKQYUqnowz0\"",
		"mtime": "2026-07-01T12:42:21.740Z",
		"size": 62,
		"path": "../public/assets/ryan-arms-crossed-DlGMsC8z.js"
	},
	"/assets/search-BQpPPf1t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-afb2EItRxMmGg22Nom9u1BIiEHM\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 174,
		"path": "../public/assets/search-BQpPPf1t.js"
	},
	"/assets/security-bank-C-tKdCGP.png": {
		"type": "image/png",
		"etag": "\"12d59-ZMsnnoXKkROiJY8SQbAC4m4Belw\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 77145,
		"path": "../public/assets/security-bank-C-tKdCGP.png"
	},
	"/assets/ryan-card-B2mrRAmU.png": {
		"type": "image/png",
		"etag": "\"4c095-B5XKDBTgb5MuD0Rze87D0eAvXuQ\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 311445,
		"path": "../public/assets/ryan-card-B2mrRAmU.png"
	},
	"/assets/services-B92iPtab.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"803-h5mIuJvXKZqUdLUqbKj50FBQNe0\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 2051,
		"path": "../public/assets/services-B92iPtab.js"
	},
	"/assets/services-wZfVGM6I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c0-paCJ81qrJ876JQiydbEU1l92TaE\"",
		"mtime": "2026-07-01T12:42:21.742Z",
		"size": 2496,
		"path": "../public/assets/services-wZfVGM6I.js"
	},
	"/assets/sta-lucia-Cc9UP8Nd.png": {
		"type": "image/png",
		"etag": "\"367d7-rvj/WPNcUzJAWwuo9o6D32KUlLE\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 223191,
		"path": "../public/assets/sta-lucia-Cc9UP8Nd.png"
	},
	"/assets/styles-CgEKiHgk.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bcd5-jOJYpulU5YA1N9zPPy49omJNZSo\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 113877,
		"path": "../public/assets/styles-CgEKiHgk.css"
	},
	"/assets/viber-icon-U7U_eLqn.png": {
		"type": "image/png",
		"etag": "\"1d0c0-HvaadX8ho9TaBSGnlZuxl6EN02w\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 118976,
		"path": "../public/assets/viber-icon-U7U_eLqn.png"
	},
	"/assets/ryan-arms-crossed-CG-rqf3V.png": {
		"type": "image/png",
		"etag": "\"228baa-0t5RlhM/sk1awpP5dgHn4YnUrjI\"",
		"mtime": "2026-07-01T12:42:21.753Z",
		"size": 2263978,
		"path": "../public/assets/ryan-arms-crossed-CG-rqf3V.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_Ecl4bk = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_Ecl4bk
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
