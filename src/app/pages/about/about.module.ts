import { DetailHolderComponent } from './../../detail-holder/detail-holder.component';
import { HumanDatePipe } from './../../human-date.pipe';
import { BackButtonComponent } from './../../back-button/back-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, BackButtonComponent, HumanDatePipe, DetailHolderComponent]
})
export class AboutPageModule { }
