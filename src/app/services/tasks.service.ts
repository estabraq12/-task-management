import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] =[];

  constructor( )
  {  let storetasks = localStorage.getItem('tasks');
  if (storetasks)
  {
    this.tasks =  this.tasks =JSON.parse(storetasks);

  }
  else
  {
    this.tasks =[];
  }
  }
  ds(i: number)
  {
    this.tasks.splice(i,1);
    this.storetask();
  }

  st(title: any, descreption: any , dueـdate :any)
  {
    this.tasks.push({
    title ,
    descreption,
    dueـdate,
    isChecked: false
    })
    this.storetask();
  }
  ut(id:any,item:any)
  {
    this.tasks[id]=item;
  this.storetask();
  }
  storetask()
  {
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  saveState(isChecked: any, id:any) {
    this.tasks[id].isChecked = isChecked;
    this.storetask();
  }

}
