import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  public todolist:any = []
  constructor(public todoin:TodoServiceService) { }

  removeTask(item:any){
    this.todoin.todolist.splice(this.todoin.todolist.indexOf(item), 1);
  }
  ngOnInit(): void {
    this.todolist = this.todoin.getlist()
  }
}
