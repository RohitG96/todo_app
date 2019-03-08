import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        created_at: new Date(),
        updatet_at: new Date(),
        desc: "perform x y z",
        title: "task1",
        completed:true
      },
      {
        id: 1,
        created_at: new Date(),
        updatet_at: new Date(),
        desc: "perform x y z",
        title: "task2"
      },
      {
        id: 1,
        created_at: new Date(),
        updatet_at: new Date(),
        desc: "perform x y z",
        title: "task3",
        completed:true
      }
    ]
  }

}
