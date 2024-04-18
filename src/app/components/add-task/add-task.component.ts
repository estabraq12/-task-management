import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(private tasksService: TasksService,private router: Router){}
  ngOnInit(): void {

  }
  st(title: any, descreption: any , dueـdate:any)
  {
    this.tasksService.st(title.value, descreption.value , dueـdate.value);

    this.router.navigate(['/']);

  }
}
