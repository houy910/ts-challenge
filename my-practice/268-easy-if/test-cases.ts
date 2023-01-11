/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-11 08:46:47
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-11 08:53:47
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
