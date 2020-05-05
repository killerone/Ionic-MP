import { CurdService } from './../service/curd.service';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Task{

}
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  tasks;

  constructor(private router: Router,
    private authService: AuthService,
    private curdService: CurdService) { }

  ngOnInit() {
    this.curdService.getTaskAllTask().snapshotChanges().subscribe(tasks => {
      
      this.tasks = tasks;
      // console.log(tasks);
    });
  }

  newtask() {
    this.router.navigateByUrl("/new-task");
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/home");
  }



}
