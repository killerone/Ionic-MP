import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.page.html',
  styleUrls: ['./dish.page.scss'],
})
export class DishPage implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    const id = activateRoute.snapshot.params["id"];
    console.log(id);
  }

  ngOnInit() {
  }

}
