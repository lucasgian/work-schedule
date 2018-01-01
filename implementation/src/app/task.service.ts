import { Injectable } from '@angular/core';
//import { TaskComponent } from "./task/task.component";
import { TaskUser } from './task-user';

@Injectable()
export class TaskService {
  tasks:Array<TaskUser> = [];

  constructor() { }

}
