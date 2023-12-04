import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_46c64153.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_32950cc1.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_33e159cf.mjs');
const _page1  = () => import('./chunks/index_601c259f.mjs');
const _page2  = () => import('./chunks/index_418c0119.mjs');
const _page3  = () => import('./chunks/index_4fda1995.mjs');
const _page4  = () => import('./chunks/index_38e1de99.mjs');
const _page5  = () => import('./chunks/index_9d35b5ec.mjs');
const _page6  = () => import('./chunks/index_b74f2fa9.mjs');
const _page7  = () => import('./chunks/index_86d77568.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/002-scrolltrigger-screens-overlaping/index.astro", _page2],["src/pages/004-scrolltrigger-horizontal-scroll/index.astro", _page3],["src/pages/001-scrolltrigger-first-practice/index.astro", _page4],["src/pages/003-scrolltrigger-screens-coming/index.astro", _page5],["src/pages/005-scrolltrigger-square-moving/index.astro", _page6],["src/pages/006-threejs-first-practice/index.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
