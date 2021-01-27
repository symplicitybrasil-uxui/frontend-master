export default class TodoListView {
  renderList(itemsList) {
    if (!itemsList.length) {
      return `<ul class="todo-list"></ul>`;
    }
    return `
      <ul class="todo-list">
        ${itemsList.map(listItem => this.renderListItem(listItem)).join("")}
      </ul>
      `;
  }

  renderListItem(listItem) {
    const doneClass = listItem.done ? "completed" : "";
    return `
      <li class="todo-task ${doneClass}" data-id="${listItem.id}">
        <button class="js-toggle-complete"><i class="fas fa-check-circle"></i></button>
        <span class="task-title">${listItem.title}</span>
        <input type="text" class="edit-field" value="${listItem.title}"></input>
        <div class="actions">
          <button class="js-edit btn-edit"><i class="fas fa-edit"></i></button>
        </div>
      </li>
    `;
  }
}
