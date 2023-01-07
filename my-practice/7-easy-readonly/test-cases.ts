/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-07 11:24:07
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-07 11:24:12
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}