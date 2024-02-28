import { type PageContext } from 'vike/types';

export type ExtendedContext = PageContext & {
  serverUrl: string;
  httpMethod: string;
  requestBody: { [key: string]: unknown };
};
