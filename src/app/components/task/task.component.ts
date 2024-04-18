import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
taskid: any ;
task: any;
constructor(private route:ActivatedRoute, private tasksservice:TasksService ,private router:Router){}
ngOnInit(): void {
  this.taskid = this.route.snapshot.paramMap.get('id')
  this.task = this.tasksservice.tasks[this.taskid];

}
ut()
{
  this.tasksservice.ut(this.taskid,this.task);
  this.router.navigate(['/']);
}

ds()
{
  this.tasksservice.ds(this.taskid);
  this.router.navigate(['/']);

}


}
