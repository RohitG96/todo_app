import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodolistServicesService } from 'src/app/todolist-services.service';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() complete = new EventEmitter();
  @Output() delete = new EventEmitter();
  checked:boolean = false;
  offset:string="16";
  constructor(private _todolist: TodolistServicesService) { }

  ngOnInit() {
    this.checked = true;
  }

  onDelete = () => {
    this._todolist.removeTodo(this.todo.id);
    this.delete.emit(true)
  }

  onComplete = () => {
    this._todolist.completedTodo(this.todo.id);
    this.complete.emit(true)
  }

}
