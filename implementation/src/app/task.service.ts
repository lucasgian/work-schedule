import { Injectable } from '@angular/core';
//import { TaskComponent } from "./task/task.component";
import { TaskUser } from './task-user';

@Injectable()
export class TaskService {
  tasks: Array<TaskUser> = [];
  size: number = 0;

  constructor() { }


  /* method, the task addition */
  add(task:string) {
    this.tasks.push(new TaskUser(this.size++, task));
  }

  /* method, the task remove */
  remove(index: number) {

    for (var i = 0; i != this.size; i++)
      if (this.tasks[i].getId() == index)
        this.tasks.splice(i, 1);

    this.size--;
  }

  /* method, the task edit */
  edit(index: number) {

  }
}
