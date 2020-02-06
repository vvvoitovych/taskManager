import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
import { Task } from "../models/task.model";

@Injectable()
export class TaskService {
  private url = 'http://localhost:3001';
  constructor(private http: HttpClient) {
  }

  create(task: Task): Observable<Task> {
    return this.http.post( `${this.url}/tasks`, task)
      .pipe(map((response: any) => response));
  }

  fetch(): Observable<Array<Task>> {
    return this.http.get(`${this.url}/tasks`)
      .pipe(map((response: any) => response))
  };

  delete(task: Task): Observable<{}> {
    return this.http.delete(`${this.url}/tasks/${task.id}`)
      .pipe(map((response: any) => response))
  }

  update(task: Task): Observable<Task> {
    return this.http.put(`${this.url}/tasks/${task.id}`, task)
      .pipe(map((response: any) => response))
  }

}

