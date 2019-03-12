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
        desc: "perform x y z",
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
    this.todos = this.todos.filter((value:Todo, index:number, arr:[])=>{
      return value.id != id;
    })
  }
}
