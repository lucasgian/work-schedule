import { Injectable } from '@angular/core';
//import { TaskComponent } from "./task/task.component";
import { TaskUser } from './task-user';

@Injectable()
export class TaskService {
  tasks: Array<TaskUser> = [];
  size: number = 0;

  constructor() { }


  /* method, the task addition */
  add(name_task:string, date_task:string, prio_task) {
    this.tasks.push(new TaskUser(this.size++, name_task, date_task, prio_task));
  }

  /* method, the task remove */
  remove(index: number) {

    for (var i = 0; i != this.size; i++)
      if (this.tasks[i].getId() == index)
        this.tasks.splice(i, 1);

    this.size--;
  }

  /* method, the task edit */
  edit(index: number, name_task:string, date_task:string, prio_task) {
    this.tasks[index] = new TaskUser(index, name_task, date_task, prio_task);
  }
}
