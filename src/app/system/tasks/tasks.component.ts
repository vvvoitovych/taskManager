import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from "../../models/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  @Input()
  public tasks: Array<Task> = [];

  @Output()
  public onDelete: EventEmitter<Task> = new EventEmitter();

  @Output()
  public onUpdate: EventEmitter<Task> = new EventEmitter();

  public modalOpened = false;

  public selectedTask: Task = {name: '', description: ''};

  constructor() { }


  openChange(task: Task) {
    this.openModal();
    this.selectedTask = {...task}
  }

  public remove(task: Task): void {
    this.onDelete.emit(task);
  }

  public create(): void {
    if (this.selectedTask.name.trim() && this.selectedTask.description.trim()) {
      this.onUpdate.emit(this.selectedTask)
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
}
