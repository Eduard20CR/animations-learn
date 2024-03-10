import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_32950cc1.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0ed26b96.js"}],"styles":[{"type":"external","src":"/_astro/index.9fe01132.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.46f1636b.js"}],"styles":[{"type":"external","src":"/_astro/index.9fe01132.css"}],"routeData":{"route":"/animation-001","type":"page","pattern":"^\\/animation-001\\/?$","segments":[[{"content":"animation-001","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animation-001/index.astro","pathname":"/animation-001","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.609a8c6c.js"}],"styles":[{"type":"external","src":"/_astro/index.9fe01132.css"}],"routeData":{"route":"/animation-002","type":"page","pattern":"^\\/animation-002\\/?$","segments":[[{"content":"animation-002","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animation-002/index.astro","pathname":"/animation-002","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.c4adc099.js"}],"styles":[{"type":"external","src":"/_astro/index.9fe01132.css"}],"routeData":{"route":"/animation-003","type":"page","pattern":"^\\/animation-003\\/?$","segments":[[{"content":"animation-003","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animation-003/index.astro","pathname":"/animation-003","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2629a106.js"}],"styles":[{"type":"external","src":"/_astro/index.9fe01132.css"}],"routeData":{"route":"/animation-004","type":"page","pattern":"^\\/animation-004\\/?$","segments":[[{"content":"animation-004","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animation-004/index.astro","pathname":"/animation-004","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.b669abf6.js"}],"styles":[{"type":"external","src":"/_astro/index.9fe01132.css"}],"routeData":{"route":"/animation-005","type":"page","pattern":"^\\/animation-005\\/?$","segments":[[{"content":"animation-005","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/animation-005/index.astro","pathname":"/animation-005","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/oscar.vasquez/Downloads/09_TEST/gsap_scroll_trigger/gsap/src/pages/animation-001/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/09_TEST/gsap_scroll_trigger/gsap/src/pages/animation-002/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/09_TEST/gsap_scroll_trigger/gsap/src/pages/animation-003/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/09_TEST/gsap_scroll_trigger/gsap/src/pages/animation-004/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/09_TEST/gsap_scroll_trigger/gsap/src/pages/animation-005/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/09_TEST/gsap_scroll_trigger/gsap/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_8133d911.mjs","\u0000@astrojs-manifest":"manifest_42e97aa9.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_0ff2c4f7.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_62268ada.mjs","\u0000@astro-page:src/pages/animation-001/index@_@astro":"chunks/index_4472709b.mjs","\u0000@astro-page:src/pages/animation-002/index@_@astro":"chunks/index_9e92781a.mjs","\u0000@astro-page:src/pages/animation-003/index@_@astro":"chunks/index_e9b75333.mjs","\u0000@astro-page:src/pages/animation-004/index@_@astro":"chunks/index_a47010d4.mjs","\u0000@astro-page:src/pages/animation-005/index@_@astro":"chunks/index_897377f6.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.c4adc099.js","/astro/hoisted.js?q=0":"_astro/hoisted.609a8c6c.js","/astro/hoisted.js?q=4":"_astro/hoisted.2629a106.js","/astro/hoisted.js?q=1":"_astro/hoisted.46f1636b.js","/astro/hoisted.js?q=3":"_astro/hoisted.b669abf6.js","/astro/hoisted.js?q=5":"_astro/hoisted.0ed26b96.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.9fe01132.css","/favicon.svg","/_astro/ScrollTrigger.1fe021b6.js","/_astro/hoisted.0ed26b96.js","/_astro/hoisted.2629a106.js","/_astro/hoisted.46f1636b.js","/_astro/hoisted.609a8c6c.js","/_astro/hoisted.b669abf6.js","/_astro/hoisted.c4adc099.js"]});

export { manifest };
