import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TaskService } from "../task.service";
import { TaskUser } from "../task-user";

@Component({
  selector: 'task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  id: number;
  tasks: Array<TaskUser>;
  task: TaskUser;
  newTask:string = "";

  constructor(private router: ActivatedRoute, private taskService: TaskService) {
    this.id = parseInt(this.router.snapshot.params['id'], 10);
    this.tasks = this.taskService.tasks;
    this.task = this.tasks[this.id];
  }

  add(index: number) {
    this.tasks[index] = new TaskUser(index, this.newTask);
  }
  ngOnInit() {

  }

}
