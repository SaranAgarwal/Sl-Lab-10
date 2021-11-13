import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  constructor(private info:TodoServiceService){
  }
  submit(e:any){
    if(e.length == 0){
      alert("Please enter valid task");
    }
    else{
      let id = this.info.todolist.length + 1;
      let element = {"sno": id, "Task": e,"Done":"Pending"}
      this.info.todolist.push(element);
    }
  }

  removeTask(item:any){
    this.info.todolist.splice(this.info.todolist.indexOf(item), 1);
  }
}
