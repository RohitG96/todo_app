import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodolistServicesService } from 'src/app/todolist-services.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  renderInputComponent: boolean = false;
  constructor(private _todolist: TodolistServicesService) { }

  ngOnInit() {
    this.todos = this._todolist.getTodos()
  }

  onAdd = (e:any) => {
    this.renderInputComponent = true;
  }

}
