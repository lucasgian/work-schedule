import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { TaskUser } from '../task-user';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  thenBlock: TemplateRef<any>|null = null;
  show: boolean = true;
 
  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any>|null = null;
 
  switchPrimary() {
    this.thenBlock = this.primaryBlock;
  }
 
  ngOnInit() { this.thenBlock = this.primaryBlock; }


  tasks:Array<TaskUser>;  
  task:string = "";
 

  constructor(private taskService:TaskService) {
    this.tasks = this.taskService.tasks;
  }

  add() {
    this.taskService.add(this.task);
  }
}
