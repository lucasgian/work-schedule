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
  id = 0;
  add() {
    this.tasks.push(this.task);
  }
}
