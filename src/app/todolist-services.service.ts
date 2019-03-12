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
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        desc: "perform x y z",
        title: "task1",
        completed: true
      },
      {
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        desc: "perform x y z",
        title: "task2"
      },
      {
        id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        desc: "perform x y z",
        title: "task3",
        completed: true
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
    this.todos = this.todos.filter((value:Todo, index:number, arr:[])=>{
      return value.id != id;
    })
  }
}
