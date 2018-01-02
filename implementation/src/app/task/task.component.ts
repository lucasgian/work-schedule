import { Component } from '@angular/core';

import { TaskUser } from '../task-user';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  tasks: Array<TaskUser>;
  name_task: string = "";
  date_task: string = "";
  prio_task: string = "";

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }

  add() {
    this.taskService.add(this.name_task, this.date_task, this.prio_task);
  }
}


/*
  import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

  thenBlock: TemplateRef<any>|null = null;
  show: boolean = true;
 
  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any>|null = null;
 
  switchPrimary() {
    this.thenBlock = this.primaryBlock;
  }
 
  ngOnInit() { this.thenBlock = this.primaryBlock; }

*/