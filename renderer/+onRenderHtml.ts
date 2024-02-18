// Environment: server

import { dangerouslySkipEscape } from 'vike/server';
import type { OnRenderHtmlAsync } from 'vike/types';
import { Index } from '../src';

/**
 * The onRenderHtml() hook defines how pages are rendered to HTML.
 * @see {@link https://vike.dev/onRenderHtml}
 */
const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext;
  const pageContent = await (Page as () => Promise<string>)();
  const html = await Index({ children: pageContent });
  const documentHtml = dangerouslySkipEscape(html);

  return {
    documentHtml,
  };
};

export { onRenderHtml };
