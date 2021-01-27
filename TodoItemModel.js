class TodoItemModel {
  id;
  createdAt;
  title;
  done;

  constructor(id, createdAt, title, done) {
    this.id = id;
    this.createdAt = createdAt;
    this.title = title;
    this.done = done;
  }
}

export default TodoItemModel;
