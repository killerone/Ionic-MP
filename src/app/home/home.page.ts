import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  link = 'https://reqres.in/api/users?page=0&per_page=12';
  users = [];

  constructor(private http: HttpClient) {
    http.get(this.link).subscribe(data => {
      this.users = data.data;
    });
  }

  deleteUser(id) {
    this.users.splice(id, 1);
  }
}
