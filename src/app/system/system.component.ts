import { Component, OnInit } from "@angular/core";
import { TaskService } from "../services/task.service";
import { Task } from "../models/task.model";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  public tasks: Array<Task> = [];

  constructor(private authService: AuthService,
              private taskService: TaskService,
              private router: Router) {
    // nothing
  }

  public ngOnInit(): void {
    this.getTasks();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login'])
  }

  public getTasks(): void {
    this.taskService.fetch()
      .subscribe((tasks) => {
        this.tasks = tasks;
      })
  }

  public createTask(task: Task): void {
    this.taskService.create(task)
      .subscribe(() => {
        this.getTasks();
      })
  }

  public removeTask(task): void {
    this.taskService.delete(task)
      .subscribe((data) => {
        this.getTasks()
      });
  }

  public updateTask(task: Task): void {
    this.taskService.update(task)
      .subscribe(() => {
        this.getTasks();
      })
  }
}
