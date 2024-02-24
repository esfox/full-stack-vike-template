import { render } from 'vike/abort';
import { type ExtendedContext } from '../types';

export const allowHttpMethods = (httpMethods: string | string[]) => (context: ExtendedContext) => {
  let methods = Array.isArray(httpMethods) ? httpMethods : [httpMethods];
  methods = methods.map(method => method.toLowerCase());
  if (!methods.includes(context.httpMethod.toLowerCase())) {
    throw render(404);
  }
};
