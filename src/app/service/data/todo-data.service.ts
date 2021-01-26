import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username)
  {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)

  }

  deleteTodos(username ,id)
  {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)

  }

  retrieveTodo(username ,id)
  {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
   // console.log("Execute Hello World Bean Service")

  }

  // tslint:disable-next-line:typedef
  updateTodo(username , id , todo)
  {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}` , todo);
   // console.log("Execute Hello World Bean Service")

  }

  // tslint:disable-next-line:typedef
  createTodo(username , id , todo)
  {
    return this.http.post(`http://localhost:8080/users/${username}/todos/${id}` , todo);
    // console.log("Execute Hello World Bean Service")

  }
}
