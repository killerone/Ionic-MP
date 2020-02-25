import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss'],
})
export class AboutContentComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  aboutUs = `In 1957, the Bharatiya Vidya Bhavan conceived the idea of establishing an 
  engineering college in Mumbai. Sardar Patel College of Engineering was inaugurated on 19th August 1962.
  In 1995 self-financed engineering courses were added to it and it functioned as Sardar Patel College 
  of Engineering (Unaided-wing) conducting Electronics Engineering, 
  Computer Engineering and Information Technology Courses and Masters course in Electronics since 
  2005 till 2008. These courses have earned a great reputation in the field of engineering education, 
  as well as industry. Bharatiya Vidya Bhavan’s Sardar Patel College of Engineering, 
  Unaided Wing was established in its new building under the name and style of Bharatiya Vidya Bhavan’s 
  Sardar Patel Institute of Technology since 2005 and is affiliated to Mumbai University.`

  institutionalValue = `1. Integrity <br> 2. Excellence <br> 3. Social Sensitivity <br> 4. Globalization: Vasudev Kutumbakam – The whole universe is our family`

  visionMission = `
  <b>Our Vision</b><br>
  Keeping in view the growing and changing needs of Industry and society, we at S.P.I.T. 
  are committed to creating an environment which will raise the intellectual and moral standards of our students. 
  Our endeavor is to strive for the overall development of students, thereby enabling them to accept challenges. 
  In tune with this our vision is <br><br>
  
  <b>To build a renowned institute which will produce graduate engineers with global competency and social sensitivity.</b>
  <br><br>
  <b>Our Mission </b></br>
  <div >
  <ul>
    <li style="text-align:left !important">
    Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare 
    the participants to lead lives of personal integrity and civic responsibility in a global society.
    </li>
    <li>
    Promote an Educational Environment that combines academic study with the excitement of intellectual curiosity for engineers of tomorrow.
    </li>
    <li>
    Enhance career opportunities for students through Industry-Institute interaction, value-added courses and projects in cutting edge technology.
    </li>
    <li>Inculcate Entrepreneurial mindset in students to make them job creators.</li>
    <li>Focus on applied research to create next generation technologies.</li>
  </ul>
  </div>`

  founderMessage = `“Education would fail ignominiously in its objective if it manufactures only a 
  robot and called him an economic man stressing the adjective economic and forgetting the substantive 
  man. A university cannot afford to ignore the cultural aspects of education whatever studies it 
  specilizes in. Science is a means, not an end. Whereas culture is an end in itself. Even though 
  you may ultimately become a scientist, a doctor, or an engineer, you must while in college, 
  absorb fundamental values which will make you a man of culture. An engineer has not merely to 
  build bridges; he has to be a devoted husband, a kind father, a friendly neighbour, a dutiful 
  citizen, and a man true to himself. He will have trials and tribulations; his heart will fail 
  him at times; he will then need the strength which true culture alone can give.” 
  <br>--Kulpati Dr. K. M. Munshi`;

  content;
  ngOnInit() {
    if (this.title == "About Us")
      this.content = this.aboutUs;
    else if (this.title == "Institutional Value")
      this.content = this.institutionalValue;
    else if (this.title == "Vision and Mission")
      this.content = this.visionMission;
    else if (this.title == "Founder's Message")
      this.content = this.founderMessage;
  }

  @Input() title;
  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.title,
      message: this.content,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',

      }]
    });

    await alert.present();
  }


}
