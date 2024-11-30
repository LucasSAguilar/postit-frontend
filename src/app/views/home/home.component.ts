import { Component } from '@angular/core';
import { HomeMessagesComponent } from "./home-messages/home-messages.component";
import { HomeTechsComponent } from "./home-techs/home-techs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeMessagesComponent, HomeTechsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
