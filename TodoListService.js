const API_URL = "https://5dbc736530411e0014f26e5f.mockapi.io/api/tasks";
import TodoItemModel from "./TodoItemModel";

export default class TodoListService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  getListItems() {
    return new Promise((resolve, reject) => {
      this.httpService.get(API_URL).then(data => {
        try {
          if (data) {
            let todoItems = data.map(
              item =>
                new TodoItemModel(
                  item.id,
                  item.createdAt,
                  item.title,
                  item.done
                )
            );
            resolve(todoItems);
          } else {
            resolve({});
          }
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  saveListItem(listItemObject) {
    return new Promise((resolve, reject) => {
      this.httpService.post(API_URL, listItemObject).then(newItem => {
        try {
          if (newItem) {
            resolve(
              new TodoItemModel(
                newItem.id,
                newItem.createdAt,
                newItem.title,
                newItem.done
              )
            );
          } else {
            resolve({});
          }
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  updateListItem(listItemObject, id) {
    return new Promise((resolve, reject) => {
      this.httpService.put(API_URL, listItemObject, id).then(updatedItem => {
        try {
          if (updatedItem) {
            resolve(
              new TodoItemModel(
                updatedItem.id,
                updatedItem.createdAt,
                updatedItem.title,
                updatedItem.done
              )
            );
          } else {
            resolve({});
          }
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}
