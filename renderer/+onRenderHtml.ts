// Environment: server

import { dangerouslySkipEscape } from 'vike/server';
import type { OnRenderHtmlAsync } from 'vike/types';

/**
 * The onRenderHtml() hook defines how pages are rendered to HTML.
 * @see {@link https://vike.dev/onRenderHtml}
 */
const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext;
  const pageHtml = await (Page as () => Promise<string>)();
  const documentHtml = dangerouslySkipEscape(pageHtml);

  return {
    documentHtml,
  };
};

export { onRenderHtml };
