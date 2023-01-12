/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-12 09:20:57
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-12 09:24:37
 */
type Concat<T extends any[], U extends any[]> = [...T, ...U]


// 功能： 合并两个数组为一个数组，顺序为从左到右
// 用js实现
// function myConcat(T, U) {
//     retrun [...T, ...U]
// }


// 知识点：
// ...T 解构， T必须是数组，所以使用extends any[]