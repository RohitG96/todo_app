import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TemplatePortalDirective } from '@angular/cdk/portal';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo:Todo;
  checked:boolean = false;
  constructor() { }

  ngOnInit() {
    this.checked = this.todo.completed;

  }

}
