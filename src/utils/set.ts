import merge from './merge'

type Indexed<T = unknown> = {
  [key in string]: T;
};

export default function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  const isObject = (object: Indexed | unknown) => {
    return typeof object === 'object' && !Array.isArray(object) && object !== null;
  };

  if (typeof path !== 'string') {
    throw Error('path must be string');
  }

  if (!isObject(object)) {
    return object;
  }

  const keys = path.split('.');

  const newObj = keys.reduceRight((result, current) => ({
      [current]: result
  }), value);

  return merge(object as Indexed, newObj as Indexed);
}

