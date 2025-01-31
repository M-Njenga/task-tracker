import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe( () => (this.tasks = this.tasks.filter( (t) => t.task_tracker_task_id !== task.task_tracker_task_id)))

  }

  toggleReminder(task: Task){
    task.task_tracker_task_reminder = !task.task_tracker_task_reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
   
    this.taskService.addTask(task).subscribe( (task) => (this.tasks.push(task)));
    this.taskService.getTasks().subscribe((tasks)=> (this.tasks = tasks));

  }
}
