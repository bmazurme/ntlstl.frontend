declare module '*.css';
// declare module 'interpolate-html-plugin';
// declare module 'html-webpack-preconnect-plugin';

type Action<T> = {
  type: string;
  payload: T;
};

type Reducer<T> = (state: T, action: Action<T>) => T;
