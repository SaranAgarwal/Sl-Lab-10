import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  public todolist = [
    {"sno":1,"Task":"Default Task"},   
  ]
  getlist(){
    return this.todolist
  }
  constructor() { }
}
