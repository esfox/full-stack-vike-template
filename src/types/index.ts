import { type PageContext } from 'vike/types';

export type ExtendedContext = PageContext & {
  httpMethod: string;
  requestBody: { [key: string]: unknown };
};
