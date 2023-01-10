/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-10 10:49:06
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-10 10:56:31
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const


// type a = typeof tesla
// let b: a = ['tesla', 'model 3', 'model X', 'model Y']   // b只能是['tesla', 'model 3', 'model X', 'model Y']  没有其它值

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]