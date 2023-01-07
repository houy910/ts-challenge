/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-07 11:23:47
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-07 11:40:50
 */

// 自己实现Readonly
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}


// 用js来模拟题目
// function MyReadonly(todo) {
//     const obj = {}
//     for(p in todo) {
//         obj['readonly' + p] = todo[p]
//     }
//     return obj
// }

// 1 返回一个对象
// 2 遍历对象的属性名   使用keyof可以将接口转化为联合类型
// 3 每一个属性前面加上readonly


