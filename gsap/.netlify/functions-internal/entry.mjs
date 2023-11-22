import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_42e97aa9.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_32950cc1.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_0ff2c4f7.mjs');
const _page1  = () => import('./chunks/index_62268ada.mjs');
const _page2  = () => import('./chunks/index_4472709b.mjs');
const _page3  = () => import('./chunks/index_9e92781a.mjs');
const _page4  = () => import('./chunks/index_e9b75333.mjs');
const _page5  = () => import('./chunks/index_a47010d4.mjs');
const _page6  = () => import('./chunks/index_897377f6.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/animation-001/index.astro", _page2],["src/pages/animation-002/index.astro", _page3],["src/pages/animation-003/index.astro", _page4],["src/pages/animation-004/index.astro", _page5],["src/pages/animation-005/index.astro", _page6]]);
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
