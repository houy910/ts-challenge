/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-09 09:01:28
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-09 11:07:36
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
  Expect<Equal<First<[null]>, null>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]