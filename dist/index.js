import { createRequire } from 'module';

createRequire(import.meta.url);

// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/styles/SidebarDecoration.scss
var SidebarDecoration_default = ".sidebar-decoration {\n  width: 100%;\n}\n\n.sidebar-decoration img {\n  object-fit: contain;\n}";

// src/components/scripts/SidebarDecoration.inline.ts
var SidebarDecoration_inline_default = 'var i=null;document.addEventListener("prenav",()=>{let e=document.querySelector(".sidebar-decoration")?.getAnimations()[0];e?.currentTime!=null&&(i=Number(e.currentTime))});function l(){let e=document.querySelector(".sidebar-decoration");if(!e)return;let n=document.querySelector(".sidebar-decoration > img");if(!n)return;let t=[],o=e.animate([{transform:"rotateY(18deg) translateY(0)"},{transform:"rotateY(5deg) translateY(-16px)"}],{duration:2500,iterations:1/0,direction:"alternate",easing:"ease-in-out"}),r=n.animate([{transform:"scale(1)"},{transform:"scale(0.9)",offset:.3},{transform:"scale(1.05)",offset:.7},{transform:"scale(1)"}],{duration:300,easing:"ease-out"});i!==null&&(o.currentTime=i);function d(){o.playbackRate=15}function s(){o.playbackRate=1}function c(){r.cancel(),r.play()}r.pause(),e.addEventListener("mouseenter",d),t.push(()=>e.removeEventListener("mouseenter",d)),e.addEventListener("mouseleave",s),t.push(()=>e.removeEventListener("mouseleave",s)),n.addEventListener("click",c),t.push(()=>n.removeEventListener("click",c));function m(a){n.src=a=="light"?n.dataset.lightSrc:n.dataset.darkSrc}let f=document.documentElement.getAttribute("saved-theme")==="dark"?"dark":"light";m(f);let u=a=>{m(a.detail.theme)};document.addEventListener("themechange",u),t.push(()=>document.removeEventListener("themechange",u)),typeof window<"u"&&window.addCleanup&&window.addCleanup(()=>{t.forEach(a=>a())})}document.addEventListener("nav",e=>{l()});document.addEventListener("render",()=>{l()});\n';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/SidebarDecorationComponent.tsx
var defaultOptions = {
  className: "sidebar-decoration"
};
var SidebarDecorationComponent_default = ((userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const SidebarDecorationComponent = (props) => {
    const { cfg } = props;
    const displayClass = props.displayClass;
    const lightSrc = opts.lightSrc ?? "/static/sidebar-decoration-image-light.png";
    const darkSrc = opts.darkSrc ?? "/static/sidebar-decoration-image-dark.png";
    return /* @__PURE__ */ u2("div", { class: classNames(displayClass, opts.className), children: /* @__PURE__ */ u2("img", { src: lightSrc, "data-light-src": lightSrc, "data-dark-src": darkSrc }) });
  };
  SidebarDecorationComponent.css = SidebarDecoration_default;
  SidebarDecorationComponent.afterDOMLoaded = SidebarDecoration_inline_default;
  return SidebarDecorationComponent;
});

export { SidebarDecorationComponent_default as SidebarDecorationComponent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map