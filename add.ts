import {Builder} from './Builder';

export default function add(a: string, b: string) {
  return new Builder(a + b).build();
};
