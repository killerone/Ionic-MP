import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {

  person = "../../assets/icon/person-outline.svg";
  location = "../../assets/icon/location-outline.svg";
  mail = "../../assets/icon/mail-outline.svg";
  calender = "../../assets/icon/calender-outline.svg";
  cake = "../../assets/icon/birthday-cake-solid.svg";


  data: { name: string; dob: Date; address: string; email: string };
  constructor(private router: Router) { }

  ngOnInit() {
    // this.data = {
    //   name: 'Himanshu',
    //   dob: 1450025511114,
    //   address: 'Mumbai',
    //   email: 'himanshu.pednekar@spit.ac.in'
    // };
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation.extras.state as {
      name: string;
      dob: Date;
      address: string;
      email: string;
    };
  }
}
