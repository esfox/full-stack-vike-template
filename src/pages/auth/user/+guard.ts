import { allowHttpMethods } from '../../../guards/httpMethod.guard';

export const guard = allowHttpMethods('post');
