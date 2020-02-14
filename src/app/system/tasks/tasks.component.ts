import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from "../../models/task.model";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  @Input()
  public tasks: Array<Task> = [];

  @Input()
  public users: Array<User> = [];

  @Output()
  public onDelete: EventEmitter<Task> = new EventEmitter();

  @Output()
  public onUpdate: EventEmitter<Task> = new EventEmitter();

  public modalOpened = false;

  public shareOpened = false;

  public selectedTask: Task = {name: '', description: ''};

  constructor() { }


  openChange(task: Task) {
    this.openModal();
    this.selectedTask = {...task};
  }

  public remove(task: Task): void {
    this.onDelete.emit(task);
  }

  public create(): void {
    if (this.selectedTask.name.trim() && this.selectedTask.description.trim()) {
      this.onUpdate.emit(this.selectedTask);
      this.closeModal();
    }
  }

  public closeModal(): void {
    this.modalOpened = false;
    this.selectedTask = {name: '', description: ''};
  }

  public openModal(): void {
    this.modalOpened = true;
  }

  public openShare(task: Task): void {
    this.clearUsersChecked();

    this.shareOpened = true;
    this.selectedTask = {...task};
  }

  public closeShare(): void {
    this.shareOpened = false;
    this.selectedTask = {name: '', description: ''};
  }

  public shareTask(): void {
    const usersToShare: Array<any> = this.users.filter((user) => user.checked);

    for(let i = 0; i < usersToShare.length; i++) {
      this.selectedTask.permissions.push(usersToShare[i].id);
    }

    this.onUpdate.emit(this.selectedTask);
    this.closeShare();
  }

  private clearUsersChecked(): void {
    this.users.forEach(user => {
      user.checked = false;
    });
  }
}
