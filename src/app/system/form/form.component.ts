import { Component, Input, OnInit } from '@angular/core';
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

  form: FormGroup;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'taskName': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    })
  }
  onSubmit() {
    const {taskName, description} = this.form.value;
    const task = new Task(taskName, description);
    this.taskService.createNewTask(task)
      .subscribe(() => {})

  }
}
