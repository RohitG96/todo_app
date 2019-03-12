import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../models/Todo";
import { isTemplateRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() length:number = 0;
  @Output() valueChange = new EventEmitter();
  due_date:Date;
  title: string = "";
  desc:string = "";
  item: Todo;


  constructor() { }

  ngOnInit() {
  }

  onChange = (e:any) => {
    console.log(e)
    this.due_date = e
  } 

  onSave = (e:any) => {
    this.item.id = this.length;
    this.item.desc = this.desc;
    this.item.title = this.title;
    this.item.created_at = new Date();
    this.item.updated_at = new Date(); 
    this.valueChange.emit(this.item)
    
  }

}
