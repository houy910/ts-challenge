/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-09 09:01:06
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-09 11:09:51
 */
// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never  
// 正常情况下的 T[0] 肯定是会存在于 T[number] 中的，但是当数组为空的时候 T[0] 为 undefined ，就不包含在 T[number] 的 never 中了

type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never





// 用js实现
// function ReturnFirstType (arr) {
//     if(arr.length == 0) return "never"
//     return arr[0]
// }

// 返回数组中的第一个元素，数组为空返回never

// 通过 T[number] 的方式，我们能遍历传入的数组  
type firstArray = [1,2,3]
type firstArrayTest1 = firstArray[number]  // 3 | 2 | 1

type secondArray = []
type secondArrayTest1 = secondArray[number]  // never



// 知识点
// infer 表示在 extends 条件语句中待推断的类型变量。