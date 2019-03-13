import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodolistServicesService } from 'src/app/todolist-services.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() addTask = new EventEmitter();
  item: Todo = new Todo();


  constructor(private _todolist: TodolistServicesService) { }

  ngOnInit() {
  }

  onSave = (desc:any, title:any, date:Date) => {
    this.item.id = this._todolist.todos.length;
    this.item.desc = desc;
    this.item.title = title;
    this.item.created_at = new Date();
    this.item.updated_at = new Date(); 
    this.item.due_date = date;
    console.log(this.item)
    console.log(this._todolist.addTodos(this.item))
    this.addTask.emit(true)
    
  }

}
