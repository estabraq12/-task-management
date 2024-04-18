import { Component,OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor(public taskservice:TasksService){}
ngOnInit(): void {

}
ds(i: number)
{
  this.taskservice.ds(i);
}
saveState(isChecked: any, id:any) {
  this.taskservice.saveState(isChecked, id);
}
}

