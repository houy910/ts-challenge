`Readonly<Type>` 用于构造一个`Type`下面的所有属性全都设置为只读的类型，意味着这个类型的所有的属性全都不可以重新赋值<br>
<br>
例子：

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
// TypeError: Cannot assign to 'title' because it is a read-only property.
```
