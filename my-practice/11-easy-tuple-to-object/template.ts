/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-09 11:38:12
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-09 11:46:38
 */
type TupleToObject<T extends readonly (string| number)[]> = {
    [P in T[number]] : P
}

// 传入的数组值中假如有对象类型的话，会报错

// 题目： 传入一个数组，返回一个对象，属性和值都是数组元素  [1,2,3]  => {1:1, 2:2, 3: 3}


// 用js写一下

// function returnObject (arr) {
//     const obj = {}
//     for(p in arr) {
//         obj[p] = p
//     }
//     return obj
// }


// 知识点： 
// as const
// T[number] 遍历数组元素