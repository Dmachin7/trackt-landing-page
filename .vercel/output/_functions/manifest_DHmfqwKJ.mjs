import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_Bq85yh1I.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CXcLD5Yv.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/","cacheDir":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/node_modules/.astro/","outDir":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/dist/","srcDir":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/","publicDir":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/public/","buildClientDir":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/dist/client/","buildServerDir":"file:///Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/subscribe","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/subscribe\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"subscribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/subscribe.ts","pathname":"/api/subscribe","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/subscribe@_@ts":"pages/api/subscribe.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DHmfqwKJ.mjs","/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BqRYG2zi.mjs","/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.IQi4pr_Z.js","/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BbVgY59t.js","/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/components/Waitlist.astro?astro&type=script&index=0&lang.ts":"_astro/Waitlist.astro_astro_type_script_index_0_lang.CiV3xiq4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/pages/index.astro?astro&type=script&index=0&lang.ts","const s=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.remove(\"opacity-0\",\"translate-y-8\"),s.unobserve(r.target))})},{threshold:.1});document.querySelectorAll(\".scroll-reveal\").forEach(e=>{s.observe(e)});"],["/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"site-header\"),s=()=>{window.scrollY>50?e?.classList.add(\"bg-bg-dark/80\",\"backdrop-blur-xl\"):e?.classList.remove(\"bg-bg-dark/80\",\"backdrop-blur-xl\")};window.addEventListener(\"scroll\",s,{passive:!0});s();"],["/Users/danielwithacamera/Desktop/GrindTime/trackt_tech_projects/trackt_landing_page/src/components/Waitlist.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"waitlist-form\"),c=document.getElementById(\"waitlist-email\"),n=document.getElementById(\"waitlist-btn\"),s=document.getElementById(\"waitlist-btn-text\"),i=document.getElementById(\"waitlist-btn-icon\"),t=document.getElementById(\"waitlist-error\"),l=document.getElementById(\"waitlist-success\");d?.addEventListener(\"submit\",async r=>{r.preventDefault();const o=c?.value?.trim()??\"\";if(!o||!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(o)){t&&(t.textContent=\"Please enter a valid email address.\",t.classList.remove(\"hidden\"));return}t?.classList.add(\"hidden\"),n&&(n.disabled=!0),s&&(s.textContent=\"Joining...\"),i&&i.classList.add(\"hidden\");try{const e=await fetch(\"/api/subscribe\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({email:o})}),a=await e.json();if(e.ok&&a.ok)d.classList.add(\"hidden\"),l?.classList.remove(\"hidden\");else throw new Error(a.error??\"Something went wrong.\")}catch(e){t&&(t.textContent=e instanceof Error?e.message:\"Something went wrong. Please try again.\",t.classList.remove(\"hidden\")),n&&(n.disabled=!1),s&&(s.textContent=\"Join Waitlist\"),i&&i.classList.remove(\"hidden\")}});"]],"assets":["/_astro/inter-cyrillic-600-normal.CWCymEST.woff2","/_astro/inter-cyrillic-ext-600-normal.Dfes3d0z.woff2","/_astro/inter-greek-ext-600-normal.DRtmH8MT.woff2","/_astro/inter-greek-600-normal.plRanbMR.woff2","/_astro/inter-vietnamese-600-normal.Cc8MFFhd.woff2","/_astro/inter-latin-600-normal.LgqL8muc.woff2","/_astro/inter-latin-ext-600-normal.D2bJ5OIk.woff2","/_astro/inter-cyrillic-ext-700-normal.BjwYoWNd.woff2","/_astro/inter-cyrillic-700-normal.CjBOestx.woff2","/_astro/inter-greek-700-normal.C3JjAnD8.woff2","/_astro/inter-greek-ext-700-normal.qfdV9bQt.woff2","/_astro/inter-vietnamese-700-normal.DlLaEgI2.woff2","/_astro/inter-latin-700-normal.Yt3aPRUw.woff2","/_astro/inter-cyrillic-ext-400-normal.BQZuk6qB.woff2","/_astro/inter-latin-ext-700-normal.Ca8adRJv.woff2","/_astro/inter-cyrillic-400-normal.obahsSVq.woff2","/_astro/inter-greek-400-normal.B4URO6DV.woff2","/_astro/inter-greek-ext-400-normal.DGGRlc-M.woff2","/_astro/inter-vietnamese-400-normal.DMkecbls.woff2","/_astro/inter-latin-400-normal.C38fXH4l.woff2","/_astro/inter-latin-ext-400-normal.C1nco2VV.woff2","/_astro/inter-greek-ext-600-normal.B8X0CLgF.woff","/_astro/inter-cyrillic-600-normal.4D_pXhcN.woff","/_astro/inter-latin-600-normal.CiBQ2DWP.woff","/_astro/inter-greek-600-normal.BZpKdvQh.woff","/_astro/inter-vietnamese-600-normal.BuLX-rYi.woff","/_astro/inter-cyrillic-ext-600-normal.Bcila6Z-.woff","/_astro/inter-cyrillic-ext-700-normal.LO58E6JB.woff","/_astro/inter-greek-700-normal.BUv2fZ6O.woff","/_astro/inter-cyrillic-700-normal.DrXBdSj3.woff","/_astro/inter-greek-ext-700-normal.BoQ6DsYi.woff","/_astro/inter-latin-ext-600-normal.CIVaiw4L.woff","/_astro/inter-vietnamese-700-normal.BZaoP0fm.woff","/_astro/inter-latin-700-normal.BLAVimhd.woff","/_astro/inter-cyrillic-ext-400-normal.DQukG94-.woff","/_astro/inter-vietnamese-400-normal.Bbgyi5SW.woff","/_astro/inter-cyrillic-400-normal.HOLc17fK.woff","/_astro/inter-greek-400-normal.q2sYcFCs.woff","/_astro/inter-latin-ext-700-normal.TidjK2hL.woff","/_astro/inter-latin-400-normal.CyCys3Eg.woff","/_astro/inter-greek-ext-400-normal.KugGGMne.woff","/_astro/inter-latin-ext-400-normal.77YHD8bZ.woff","/_astro/index.CjrRx7q1.css","/favicon.ico","/favicon.svg","/logo/trackt-logo.svg","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"53BPkR+/lRA4iH5qNGxSJ/0bHzjyMeNkZBzqvZ0Y7Ek="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
