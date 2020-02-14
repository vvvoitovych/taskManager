import { Component, OnInit } from "@angular/core";
import { TaskService } from "../services/task.service";
import { Task } from "../models/task.model";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { User } from "../models/user.model";
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  public tasks: Array<Task> = [];
  private users: Array<User> = [];

  constructor(private authService: AuthService,
              private taskService: TaskService,
              private userService: UsersService,
              private router: Router) {
    // nothing
  }

  public ngOnInit(): void {
    this.getTasks();
    this.getUsers();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login'])
  }

  public getUsers(): void {
    this.userService.getUsers()
      .subscribe((users: Array<User>) => {
        this.users = users;
      })
  }

  public getTasks(): void {
    this.taskService.fetch()
      .subscribe((tasks) => {
        this.tasks = tasks.filter((task) => task.permissions.includes(this.userService.user.id));
      })
  }

  public createTask(task: Task): void {
    task.permissions = [this.userService.user.id];

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
