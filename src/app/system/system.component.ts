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
export class SystemComponent{
  constructor(private authService: AuthService,
              private router: Router) {}

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login'])

  }
}
