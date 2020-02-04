import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../models/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Output()
  task1: Task;
  changeForm = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((task: Task) => {
        this.task1 = task
      });

  }
  onDelete(task1: Task) {
    this.taskService.deleteTask(task1)
      .subscribe((data) => {
        this.taskService.getTasks()
          .subscribe((task: Task) => {
            this.task1 = task
          });
      });
  }
  onChange() {
    this.changeForm = !this.changeForm;
  }
}
