export type UnWrapArray<T> = T extends Array<infer A> | ReadonlyArray<infer A> ? A : never
