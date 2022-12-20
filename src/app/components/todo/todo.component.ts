import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todo: Todo[];
  constructor() {
    this.todo = [
      {
        sno: 1,
        title: 'hii',
        desc: 'hello',
        active: true,
      },
      {
        sno: 2,
        title: 'hello',
        desc: 'hello',
        active: true,
      },
      {
        sno: 6,
        title: 'haiya',
        desc: 'hello',
        active: true,
      },
      {
        sno: 3,
        title: 'haiya',
        desc: 'hello',
        active: true,
      },
      {
        sno: 4,
        title: 'haiya',
        desc: 'hello',
        active: true,
      },
      {
        sno: 5,
        title: 'haiya',
        desc: 'hello',
        active: true,
      },
    ];
  }
  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index=this.todo.indexOf(todo)
    this.todo.splice(index,1)
  }
  addTodo(todo: Todo) {
    this.todo.push(todo);
    console.log(todo);
    localStorage.setItem("todo",JSON.stringify(this.todo));
  }
  toogletodo(todo:Todo){
    // const index = this.todo.indexOf(todo);
    // this.todo[index].active=!this.todo[index.active];
    // localStorage.setItem("todo",JSON.stringify(this.todo))
  }
}
