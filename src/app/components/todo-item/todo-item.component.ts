import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter();
  constructor() {
    this.todo = {
      sno: 1,
      title: 'hii',
      desc: 'hello',
      active: true,
    },
    this.i=1;
    ;
  }
  ngOnInit(): void {}
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("triggered")
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
    console.log('striked')
  }
  
}
