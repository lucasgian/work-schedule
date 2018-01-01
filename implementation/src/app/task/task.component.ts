import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { TaskUser } from '../task-user';


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



  tasks:Array<TaskUser> = [];
  task:string = "";
  size:number = 0;
  /* method, the task addition */
  add() {
    this.tasks.push(new TaskUser(this.size++, this.task));
  }

  /* method, the task remove */
  remove(index:number) {
    var aux = [];
    for(var i=0; i != this.size; i++)
      if(this.tasks[i].getId() != index)
        aux.push(this.tasks[i]);
      
    this.tasks = aux;
    this.size--;
  }

  /* method, the task edit */
  edit(index:number) {
    
  }
}
