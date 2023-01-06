/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-06 16:06:18
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-06 16:07:24
 */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]