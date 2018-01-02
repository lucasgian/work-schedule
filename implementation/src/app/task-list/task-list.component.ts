import { Component } from '@angular/core';
import { TaskUser } from "../task-user";
import { TaskService } from "../task.service";
@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:Array<TaskUser>;

  constructor(private taskSevice:TaskService) {
    this.tasks = this.taskSevice.tasks;
  }

  remove(index:number) {
    this.taskSevice.remove(index);
  }
}
