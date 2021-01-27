export default class HttpService {
  HEADER = { "Content-Type": "application/json; charset=utf-8" };

  get(url) {
    return fetch(url).then(function(response) {
      switch (response.status) {
        case 200:
          return response.json();
      }
    });
  }

  post(url, object) {
    return fetch(url, {
      headers: this.HEADER,
      method: "POST",
      body: JSON.stringify(object)
    }).then(function(response) {
      switch (response.status) {
        case 201:
          return response.json();
      }
    });
  }

  put(url, object, id) {
    return fetch(url + `/${id}`, {
      headers: this.HEADER,
      method: "PUT",
      body: JSON.stringify(object)
    }).then(function(response) {
      switch (response.status) {
        case 200:
          return response.json();
      }
    });
  }
}
