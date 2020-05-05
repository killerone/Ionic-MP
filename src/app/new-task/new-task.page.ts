import { CurdService } from './../service/curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {
  imgURL: any;
  imagePath: File;
  title: string;
  description: string;

  constructor(private curdService: CurdService) { }

  ngOnInit() {

    // console.log(title);
  }

  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  add() {

    this.curdService.addTask(this.title, this.description, this.imagePath);
  }

}
