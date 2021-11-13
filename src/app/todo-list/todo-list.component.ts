import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todolist:any = []
  constructor(public todoin:TodoServiceService) { }

  removeTask(item:any){
    this.todoin.todolist.splice(this.todoin.todolist.indexOf(item), 1);
  }
  ngOnInit(): void {
    this.todolist = this.todoin.getlist()
  }

}
