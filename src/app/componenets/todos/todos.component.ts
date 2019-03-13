import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodolistServicesService } from 'src/app/todolist-services.service';
import { InitialStylingValuesIndex } from '@angular/core/src/render3/interfaces/styling';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  completedTodos: Todo[];
  renderInputComponent: boolean = false;
  modified:boolean = true;
  constructor(private _todolist: TodolistServicesService) { }

  ngOnInit() {
    this.initializeTodos()
  }

  initializeTodos = ()=>{
    this.todos = this._todolist.todos.filter(val=>{
      return !val.completed && !val.deleted;
    })
    this.completedTodos = this._todolist.todos.filter(val=>{
      return val.completed && !val.deleted;
    })
  }

  onAdd = (e:any) => {
    this.renderInputComponent = true;
  }

  changeTodos = (e:any) => {
    this.initializeTodos()
    console.log(this.todos)
    this.renderInputComponent = false;
    this.modified = true
  }

}
