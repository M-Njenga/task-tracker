import { Component, EventEmitter, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from "rxjs";
import { Task } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 
  @Output() onAddTask: EventEmitter<Task> =new EventEmitter()
  task_tracker_task_text?: string;
  task_tracker_task_day?: string;
  task_tracker_task_reminder: boolean=false;
  showAddTask: boolean=false;
  subscription:Subscription;

  constructor(private uiService: UiService){
    
    this.subscription = this.uiService.onToggle().subscribe((value)=> (this.showAddTask=value))
  }

  onSubmit(){
    if(!this.task_tracker_task_text){
      alert('Please add a task!');
      return;
    }

    const newTask:any={
      task_tracker_task_text: this.task_tracker_task_text,
      task_tracker_task_day: this.task_tracker_task_day,
      task_tracker_task_reminder: this.task_tracker_task_reminder
    }

  this.onAddTask.emit(newTask)

    this.task_tracker_task_text='';
    this.task_tracker_task_day='';
    this.task_tracker_task_reminder=false;
   
  }
}
