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
  task: string = "";

  constructor(private router: ActivatedRoute, private taskService: TaskService) {
    this.id = this.router.snapshot.params['id'];
    this.tasks = this.taskService.tasks;
  }

  edit() {
    this.taskService.edit(this.id, this.task);
  }
  ngOnInit() {

  }

}
