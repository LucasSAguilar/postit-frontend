import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeMessagesComponent } from "./home-messages/home-messages.component";
import { TechnologyAreaComponent } from "../../components/technology-area/technology-area.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, HomeMessagesComponent, TechnologyAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
