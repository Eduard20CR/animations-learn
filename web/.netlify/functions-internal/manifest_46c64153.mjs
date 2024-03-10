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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.52d9a28f.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.f651db80.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"}],"routeData":{"route":"/002-scrolltrigger-screens-overlaping","type":"page","pattern":"^\\/002-scrolltrigger-screens-overlaping\\/?$","segments":[[{"content":"002-scrolltrigger-screens-overlaping","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/002-scrolltrigger-screens-overlaping/index.astro","pathname":"/002-scrolltrigger-screens-overlaping","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.7e8679bd.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"}],"routeData":{"route":"/004-scrolltrigger-horizontal-scroll","type":"page","pattern":"^\\/004-scrolltrigger-horizontal-scroll\\/?$","segments":[[{"content":"004-scrolltrigger-horizontal-scroll","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/004-scrolltrigger-horizontal-scroll/index.astro","pathname":"/004-scrolltrigger-horizontal-scroll","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.24becb6e.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"}],"routeData":{"route":"/001-scrolltrigger-first-practice","type":"page","pattern":"^\\/001-scrolltrigger-first-practice\\/?$","segments":[[{"content":"001-scrolltrigger-first-practice","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/001-scrolltrigger-first-practice/index.astro","pathname":"/001-scrolltrigger-first-practice","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.406ef2d9.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"}],"routeData":{"route":"/003-scrolltrigger-screens-coming","type":"page","pattern":"^\\/003-scrolltrigger-screens-coming\\/?$","segments":[[{"content":"003-scrolltrigger-screens-coming","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/003-scrolltrigger-screens-coming/index.astro","pathname":"/003-scrolltrigger-screens-coming","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0b8ea90b.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"}],"routeData":{"route":"/005-scrolltrigger-square-moving","type":"page","pattern":"^\\/005-scrolltrigger-square-moving\\/?$","segments":[[{"content":"005-scrolltrigger-square-moving","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/005-scrolltrigger-square-moving/index.astro","pathname":"/005-scrolltrigger-square-moving","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.a38cdc93.js"}],"styles":[{"type":"external","src":"/_astro/index.2eb41580.css"},{"type":"inline","content":"[data-astro-cid-nzovjx3x]{margin:0;padding:0}html,body{overflow:hidden}.webgl[data-astro-cid-nzovjx3x]{position:fixed;top:0;left:0;outline:none}\n"}],"routeData":{"route":"/006-three-js-first-practice","type":"page","pattern":"^\\/006-three-js-first-practice\\/?$","segments":[[{"content":"006-three-js-first-practice","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/006-three-js-first-practice/index.astro","pathname":"/006-three-js-first-practice","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/001-scrolltrigger-first-practice/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/002-scrolltrigger-screens-overlaping/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/003-scrolltrigger-screens-coming/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/004-scrolltrigger-horizontal-scroll/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/005-scrolltrigger-square-moving/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/006-three-js-first-practice/index.astro",{"propagation":"none","containsHead":true}],["/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_811209ae.mjs","\u0000@astrojs-manifest":"manifest_46c64153.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_33e159cf.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_601c259f.mjs","\u0000@astro-page:src/pages/002-scrolltrigger-screens-overlaping/index@_@astro":"chunks/index_418c0119.mjs","\u0000@astro-page:src/pages/004-scrolltrigger-horizontal-scroll/index@_@astro":"chunks/index_4fda1995.mjs","\u0000@astro-page:src/pages/001-scrolltrigger-first-practice/index@_@astro":"chunks/index_38e1de99.mjs","\u0000@astro-page:src/pages/003-scrolltrigger-screens-coming/index@_@astro":"chunks/index_9d35b5ec.mjs","\u0000@astro-page:src/pages/005-scrolltrigger-square-moving/index@_@astro":"chunks/index_b74f2fa9.mjs","\u0000@astro-page:src/pages/006-threejs-first-practice/index@_@astro":"chunks/index_86d77568.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.f651db80.js","/astro/hoisted.js?q=1":"_astro/hoisted.7e8679bd.js","/astro/hoisted.js?q=4":"_astro/hoisted.406ef2d9.js","/astro/hoisted.js?q=0":"_astro/hoisted.52d9a28f.js","/astro/hoisted.js?q=5":"_astro/hoisted.24becb6e.js","/astro/hoisted.js?q=3":"_astro/hoisted.0b8ea90b.js","/astro/hoisted.js?q=6":"_astro/hoisted.a38cdc93.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.2eb41580.css","/favicon.svg","/_astro/GlobalHeader.astro_astro_type_script_index_0_lang.0ed26b96.js","/_astro/ScrollTrigger.c3252e56.js","/_astro/hoisted.0b8ea90b.js","/_astro/hoisted.24becb6e.js","/_astro/hoisted.406ef2d9.js","/_astro/hoisted.52d9a28f.js","/_astro/hoisted.7e8679bd.js","/_astro/hoisted.a38cdc93.js","/_astro/hoisted.f651db80.js","/_astro/index.4db78ffb.js","/img/projects/getting-started-three-js/fonts/LICENSE","/img/projects/getting-started-three-js/fonts/helvetiker_regular.typeface.json","/img/projects/getting-started-three-js/textures/matcaps/1.png","/img/projects/getting-started-three-js/textures/matcaps/2.png","/img/projects/getting-started-three-js/textures/matcaps/3.png","/img/projects/getting-started-three-js/textures/matcaps/4.png","/img/projects/getting-started-three-js/textures/matcaps/5.png","/img/projects/getting-started-three-js/textures/matcaps/6.png","/img/projects/getting-started-three-js/textures/matcaps/7.png","/img/projects/getting-started-three-js/textures/matcaps/8.png"]});

export { manifest };
