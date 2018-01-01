import { Component, OnInit } from '@angular/core';

import { TaskUser } from '../task-user';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks = [];
  task = "";
  size = 0;
  add() {
    this.tasks.push(new TaskUser(this.size++, this.task));
  }
  remove(index:number) {
    var aux = [];
    for(var i=0; i != this.size; i++)
      if(this.tasks[i].id != index)
        aux.push(this.tasks[i]);
      
    this.tasks = aux;
    this.size--;
  }
}
