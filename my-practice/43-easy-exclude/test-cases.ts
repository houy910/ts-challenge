/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-10 17:29:29
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-10 17:41:26
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'd', 'c'>, 'a' | 'b' | 'd'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'd', 'a' | 'b' | 'd'>, never>>, // 都相当  返回never
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]