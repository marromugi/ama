declare type Nullable<T> = T | undefined | null;
declare type UnArray<T> = T extends
  | Array<infer A>
  | ReadonlyArray<infer A>
  ? A
  : never;
