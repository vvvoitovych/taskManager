import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from "./system.component";
import { MatSliderModule } from "@angular/material";
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({

  declarations: [SystemComponent, FormComponent, TasksComponent],
  imports: [CommonModule, FormsModule, SystemRoutingModule, MatSliderModule, ReactiveFormsModule, MatFormFieldModule]
})
export class SystemModule {
}
