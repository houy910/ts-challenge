`Pick<Type, Keys>` 用于构造一个类型，它是从`Type`类型里面挑了一些属性`Keys`(`Keys`是字符串字面量 或者 字符串字面量的联合类型)<br>
例子:

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```
