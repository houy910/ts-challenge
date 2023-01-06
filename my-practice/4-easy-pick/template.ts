/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-01-06 16:06:23
 * @LastEditors: houyan
 * @LastEditTime: 2023-01-06 16:55:26
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}



// 知识点： 
// keyof 会返回该对象的属性名组成的联合类型, P的类型就是 'title' | 'completed' | 'invalid'
// P in K  联合类型的遍历
// extends