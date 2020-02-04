import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import { Task } from "../models/task.model";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  createNewTask(task: Task): Observable<Task> {

    return this.http.post('http://localhost:3000/tasks', task)
      .pipe(map((response: any) => response));
  }

  getTasks(): Observable<Task> {
    return this.http.get('http://localhost:3000/tasks')
      .pipe(map((response: any) => response))
      };

  deleteTask(task: Task) :Observable<{}> {
    return this.http.delete(`${'http://localhost:3000/tasks'}/${task.id}`)
      .pipe(map((response: any) => response))
  }

  }

