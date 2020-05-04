import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  newtask() {
    this.router.navigateByUrl("/new-task");
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/home");
  }

}
