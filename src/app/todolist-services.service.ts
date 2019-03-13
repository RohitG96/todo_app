import { Injectable } from '@angular/core';
import { Todo } from './models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodolistServicesService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: 0,
        created_at: new Date(),
        updated_at: new Date(),
        desc: "perform x y gbajdnklflkljflkkjkllkirjlknkjjhghjbjnjb  uhiufhubkj uhiuhekuheuhffksugukhfuihu nk  j ieihsknfkesuyg egf egfuhsiunkjsnu uhinlkskhfbskjndjkbcsndkjsbcueunckjsn          uhuenkjnsknz",
        title: "task1",
        completed: true,
        due_date: new Date(),
      },
      {
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        desc: "perform x y z",
        title: "task2",
        due_date: new Date()
      },
      {
        id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        desc: "perform x y z",
        title: "task3",
        completed: true,
        due_date: new Date()
      }
    ]
  }
  getTodos() {
    return this.todos
  }
  addTodos(todo:Todo){
    this.todos.push(todo)
  }
  removeTodo(id:number){
    this.todos[id].deleted=true
    }
  completedTodo(id:number){
    this.todos[id].completed=true
  }

}
