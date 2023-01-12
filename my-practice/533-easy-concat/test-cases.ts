/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-12 09:21:18
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-12 09:22:31
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]