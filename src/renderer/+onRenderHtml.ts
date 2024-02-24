// Environment: server

import { dangerouslySkipEscape } from 'vike/server';
import type { OnRenderHtmlAsync, PageContext } from 'vike/types';
import { Index } from '..';

/**
 * The onRenderHtml() hook defines how pages are rendered to HTML.
 * @see {@link https://vike.dev/onRenderHtml}
 */
const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext;
  const pageContent = await (Page as (context: PageContext) => Promise<string>)(pageContext);
  const html = await Index({ children: pageContent });
  const documentHtml = dangerouslySkipEscape(html);

  return {
    documentHtml,
    pageContext: {},
  };
};

export { onRenderHtml };
