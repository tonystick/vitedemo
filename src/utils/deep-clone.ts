/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneDeep } from 'lodash-es';

export default function deepClone<T = any>(value: T): T {
  return cloneDeep(value);
}
