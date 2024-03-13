import HEML, { createElement } from '@heml/utils'; // eslint-disable-line no-unused-vars
import Meta from './Meta.cjs';
import isAbsoluteUrl from 'is-absolute-url';
import { resolve } from 'url';
import lodash from 'lodash';
export default createElement('base', {
  parent: ['head'],
  children: false,
  unique: true,
  defaultAttrs: {
    href: ''
  },
  render(attrs, contents) {
    Meta.set('base', attrs.href);
    return false;
  },
  preRender({
    $
  }) {
    const base = lodash.first($.findNodes('base'));
    if (base) {
      const baseUrl = base.attr('href');
      $('[href], [src]').each((i, node) => {
        const attr = lodash.has(node.attribs, 'href') ? 'href' : 'src';
        if (lodash.has(node.attribs, attr) && !isAbsoluteUrl(node.attribs[attr])) {
          node.attribs[attr] = resolve(baseUrl, node.attribs[attr]);
        }
      });
    }
  }
});
