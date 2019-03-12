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
  title:any = `<h2>{{todo.title}}<h2>`
  panels:any [];
  customStyle:any = {
      'margin-top': '0',
      'color': 'rgba(0,0,0,.85)',
      'font-weight': '500',
  }
  constructor() { }

  ngOnInit() {
    this.checked = true;
    // this.panels = [
    //   {
    //     active    : true,
    //     name      : 'This is panel header 1',
    //     disabled  : false
    //   },
    //   {
    //     active  : false,
    //     disabled: false,
    //     name    : 'This is panel header 2'
    //   },
    //   {
    //     active  : false,
    //     disabled: true,
    //     name    : 'This is panel header 3'
    //   }
    // ];

  }

}
