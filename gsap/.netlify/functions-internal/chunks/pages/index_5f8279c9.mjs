/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_32950cc1.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */
const links = [
  { link: "/", label: "Home" },
  { link: "/001-scrolltrigger-first-practice/", label: "ScrollTrigger First Practice" },
  { link: "/002-scrolltrigger-screens-overlaping/", label: "ScrollTrigger Screens Overlaping" },
  { link: "/003-scrolltrigger-screens-coming/", label: "ScrollTrigger Screens Coming" },
  { link: "/004-scrolltrigger-horizontal-scroll/", label: "ScrollTrigger Horizontal Scroll" },
  { link: "/005-scrolltrigger-square-moving/", label: "ScrollTrigger Square Moving" },
  { link: "/006-threejs-first-practice/", label: "ThreeJS First Practice" }
];

const $$Astro$9 = createAstro();
const $$LinkHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkHeader;
  const { link, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="hover:bg-gray-800 transition-colors"><a class="px-2 py-4 font-bold border-b block"${addAttribute(link, "href")}>${label}</a></li>`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/core/GlobalHeader/LinkHeader.astro", void 0);

const $$Astro$8 = createAstro();
const $$GlobalHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GlobalHeader;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed left-1/2 -translate-x-1/2 px-2 py-2 rounded bg-black text-white transition-all max-w-xs w-full max-h-52 overflow-y-scroll top-z-index h-full -bottom-full" data-astro-cid-iofofhna><ul data-astro-cid-iofofhna>${links.map(({ link, label }) => renderTemplate`${renderComponent($$result, "LinkHeader", $$LinkHeader, { "label": label, "link": link, "data-astro-cid-iofofhna": true })}`)}</ul></nav><button id="buttonNavigation" class="fixed left-1/2 bottom-10 -translate-x-1/2 px-1 py-3 rounded bg-black text-white w-16 h-16 flex justify-center items-center top-z-index" data-astro-cid-iofofhna><!-- prettier-ignore --><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-13 h-13" data-astro-cid-iofofhna><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" data-astro-cid-iofofhna></path></svg></button>`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/core/GlobalHeader/GlobalHeader.astro", void 0);

const $$Astro$7 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head><body>${renderComponent($$result, "GlobalHeader", $$GlobalHeader, {})}<main>${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/layouts/MainLayout.astro", void 0);

const $$Astro$6 = createAstro();
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="px-5 h-[100vh] flex justify-center items-center overflow-hidden relative"><div id="circle1" class="absolute aspect-square h-2/5 md:h-2/3 left-full -top-full bg-teal-100 rounded-full"></div><div id="circle2" class="absolute aspect-square h-2/5 md:h-2/3 right-full -bottom-full bg-teal-200 rounded-full"></div><h1 class="text-2xl md:text-7xl uppercase font-bold relative z-10 inline"><span id="top" class="text-teal-800 relative">Scarus</span><br><span id="under1" class="whitespace-nowrap"><span class="letterAni origin-top inline-block">A</span><span class="letterAni origin-top inline-block">n</span><span class="letterAni origin-top inline-block">i</span><span class="letterAni origin-top inline-block">m</span><span class="letterAni origin-top inline-block">a</span><span class="letterAni origin-top inline-block">t</span><span class="letterAni origin-top inline-block">i</span><span class="letterAni origin-top inline-block">o</span><span class="letterAni origin-top inline-block">n</span><span class="letterAni origin-top inline-block">s</span><span class="letterAni origin-top inline-block">&nbsp;</span></span><span id="under1" class="whitespace-nowrap"><span class="letterAni origin-top inline-block">s</span><span class="letterAni origin-top inline-block">h</span><span class="letterAni origin-top inline-block">o</span><span class="letterAni origin-top inline-block">w</span><span class="letterAni origin-top inline-block">c</span><span class="letterAni origin-top inline-block">a</span><span class="letterAni origin-top inline-block">s</span><span class="letterAni origin-top inline-block">e</span></span></h1></section>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/index.astro", void 0);

const $$file$6 = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/index.astro";
const $$url$6 = "";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$6,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"><section id="section1" class="sectionPin h-[100vh] bg-green-100"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Main Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section><section id="section2" class="sectionPin h-[100vh] bg-green-200"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">First Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos facere
          necessitatibus!
</p></div></section><section id="section3" class="sectionPin h-[100vh] bg-green-300"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Second Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos facere
          necessitatibus!
</p></div></section><section id="section4" class="sectionPin h-[100vh] bg-green-400"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Third Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos facere
          necessitatibus!
</p></div></section><section id="section5" class="sectionPin h-[100vh] bg-green-500"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Fourth Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos facere
          necessitatibus!
</p></div></section><section id="section6" class="sectionPin h-[100vh] bg-green-600"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Fifth Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos facere
          necessitatibus!
</p></div></section></div>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/002-scrolltrigger-screens-overlaping/index.astro", void 0);

const $$file$5 = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/002-scrolltrigger-screens-overlaping/index.astro";
const $$url$5 = "/002-scrolltrigger-screens-overlaping";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$5,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="section7" class="h-[100vh] bg-white"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Test Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section><div class="w-full overflow-hidden"><div id="containerCool" class="relative w-[700vw] flex overflow-x-hidden"><section id="section1" class="sectionPin w-[100vw] h-[100vh] bg-amber-100"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Main Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section><section id="section2" class="sectionPin top-0 w-[100vw] h-[100vh] bg-amber-200"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">First Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section3" class="sectionPin top-0 w-[100vw] h-[100vh] bg-amber-300"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Second Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section4" class="sectionPin top-0 w-[100vw] h-[100vh] bg-amber-400"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Third Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section5" class="sectionPin top-0 w-[100vw] h-[100vh] bg-amber-500"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Fouth Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section6" class="sectionPin top-0 w-[100vw] h-[100vh] bg-amber-600"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Fifth Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section7" class="sectionPin w-[100vw] h-[100vh] bg-amber-100"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Main Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section></div></div><section id="section7" class="h-[100vh] bg-white"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Test Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/004-scrolltrigger-horizontal-scroll/index.astro", void 0);

const $$file$4 = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/004-scrolltrigger-horizontal-scroll/index.astro";
const $$url$4 = "/004-scrolltrigger-horizontal-scroll";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="section0" class="min-h-[50vh] bg-red-200 relative"><div id="square0" class="absolute w-10 h-10 left-10 top-10 bg-black text-white flex items-center justify-center">B</div></section><section id="section1" class="min-h-[100vh] bg-red-100 relative flex overflow-hidden"><div class="section1Stagger bg-gray-100 text-black flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-200 text-black flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-300 text-black flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-400 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-500 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-600 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-700 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-800 text-white flex items-center justify-center flex-1 translate-y-full"></div><div id="section1_BoxCenter" class="section1Stagger bg-gray-900 text-white flex items-center justify-center flex-1 translate-y-full z-40 relative"><div id="section1_BoxCenter_boxToAnimate" class="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-50 rounded"><p id="section1_BoxCenter_boxToAnimate_text" class="absolute -top-1/2 left-1/2 -translate-x-1/2 px-5 rounded bg-black opacity-0">Hello!</p></div></div><div class="section1Stagger bg-gray-800 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-700 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-600 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-500 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-400 text-white flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-300 text-black flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-200 text-black flex items-center justify-center flex-1 translate-y-full"></div><div class="section1Stagger bg-gray-100 text-black flex items-center justify-center flex-1 translate-y-full"></div></section><section id="section2" class="min-h-[50vh] bg-red-200 relative"><div id="square2" class="absolute w-10 h-10 left-10 top-10 bg-black text-white flex items-center justify-center">B</div></section><section id="section3" class="min-h-[50vh] bg-red-300 relative overflow-x-hidden"><p id="section3_infiniteText" class="whitespace-nowrap text-7xl uppercase tracking-wider absolute top-1/2 -translate-y-1/2">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias amet assumenda quam architecto cumque cupiditate quos. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Alias amet assumenda quam architecto cumque cupiditate quos
</p></section><section id="section4" class="min-h-[50vh] bg-red-400 relative"><div id="square4" class="absolute w-10 h-10 left-10 top-10 bg-black text-white flex items-center justify-center">D</div></section><section id="section5" class="min-h-[50vh] bg-red-500 relative"><div id="square5" class="absolute w-10 h-10 left-10 top-10 bg-black text-white flex items-center justify-center">E</div></section>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/001-scrolltrigger-first-practice/index.astro", void 0);

const $$file$3 = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/001-scrolltrigger-first-practice/index.astro";
const $$url$3 = "/001-scrolltrigger-first-practice";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative"><section id="section1" class="sectionPin h-[100vh] bg-gray-100"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Main Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section><div id="containerCool" class="relative overflow-hidden h-[100vh]"><section id="section2" class="sectionPin absolute top-0 w-full h-[100vh] bg-sky-200"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">First Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section3" class="sectionPin absolute top-0 w-full h-[100vh] bg-sky-300"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Second Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section4" class="sectionPin absolute top-0 w-full h-[100vh] bg-sky-400"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Third Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section5" class="sectionPin absolute top-0 w-full h-[100vh] bg-sky-500"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Fouth Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section><section id="section6" class="sectionPin absolute top-0 w-full h-[100vh] bg-sky-600"><div class="flex flex-col justify-center items-center h-full gap-10"><h2 class="text-4xl">Fifth Subtitle</h2><p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci similique officia tenetur sequi iure odit, aperiam eos
            facere necessitatibus!
</p></div></section></div><section id="section7" class="sectionPin h-[100vh] bg-gray-100"><div class="flex flex-col justify-center items-center h-full gap-10"><h1 class="text-6xl">Main Title</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section></div>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/003-scrolltrigger-screens-coming/index.astro", void 0);

const $$file$2 = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/003-scrolltrigger-screens-coming/index.astro";
const $$url$2 = "/003-scrolltrigger-screens-coming";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="bg" class="h-[100vh] w-screen fixed top-0 -z-10"><div id="bg__square" class="absolute h-20 w-20 md:w-60 md:h-60 aspect-square left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded overflow-hidden"><img id="pic1" class="absolute h-full" src="https://picsum.photos/300/300" alt="" width="300" height="300"><img id="pic2" class="absolute h-full opacity-0 translate-x-10" src="https://picsum.photos/400/400" alt="" width="400" height="400"><img id="pic3" class="absolute h-full w-full opacity-0 translate-x-10 block max-w-none" src="https://picsum.photos/1000/1000" alt="" width="1000" height="1000"></div></div><div class="px-5"><section id="section1" class="relatice z-50 h-[100vh]"><div class="flex flex-col justify-center items-center h-full gap-10 w-1/2"><h1 class="text-6xl">Section 1</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section><section id="section2" class="relatice z-50 h-[100vh]"><div class="flex flex-col justify-center items-center h-full gap-10 w-1/2 ml-auto"><h1 class="text-6xl">Section 2</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section></div><section id="section3" class="relatice z-50 h-[100vh] overflow-hidden relative px-5"><div id="section3__content1" class="relative flex flex-col justify-center items-center h-full gap-10 w-1/2 ml-auto"><h1 class="text-6xl">Section 3</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div><div id="section3__content2" class="absolute left-full top-0 flex flex-col justify-center items-center h-full gap-10 w-1/2 ml-auto"><h1 class="text-6xl">Section 4</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section><div class="px-5"><section id="section4" class="relatice z-50 h-[100vh]"><div class="flex flex-col justify-center items-center h-full gap-10 w-1/2"><h1 class="text-6xl">Section 5</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p></div></section></div>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/005-scrolltrigger-square-moving/index.astro", void 0);

const $$file$1 = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/005-scrolltrigger-square-moving/index.astro";
const $$url$1 = "/005-scrolltrigger-square-moving";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-nzovjx3x": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<canvas class="webgl" data-astro-cid-nzovjx3x></canvas>` })}`;
}, "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/006-threejs-first-practice/index.astro", void 0);

const $$file = "/Users/oscar.vasquez/Downloads/05_TEST/gsap_scroll_trigger/gsap/src/pages/006-threejs-first-practice/index.astro";
const $$url = "/006-threejs-first-practice";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$5 as a, index$4 as b, index$3 as c, index$2 as d, index$1 as e, index as f, index$6 as i };
