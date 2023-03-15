/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-09 11:38:35
 * @LastEditors: houyan
 * @LastEditTime: 2023-03-15 13:59:45
 */
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// as const 理解
// as const 是 TS 的语法，它告诉 TS 它所断言的值以及该值的所有层级的子属性都是不可篡改的，故对每一级子属性都会做最严格的类型推断
//const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
//type r = typeof tuple  得到 readonly['tesla', 'model 3','model X','model Y']
//const a: r = ['tesla', 'model 3','model X','model Y']
