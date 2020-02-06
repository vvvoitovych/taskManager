import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../models/user.model";
import { Task } from "../../models/task.model";
import { TaskService } from "../../services/task.service";

/** @title Simple form field */
@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})

export class FormComponent implements OnInit {
  @Output()
  public onCreate: EventEmitter<Task> = new EventEmitter();

  public form: FormGroup;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    })
  }

  public onSubmit() {
    const task = this.form.value;
    if (task.name.trim() && task.description.trim()) {
      this.onCreate.emit(task);
      this.form.reset();
    }
  }
}
