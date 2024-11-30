import { Component } from '@angular/core';
import { TechnologyAreaComponent } from "../../../components/technology-area/technology-area.component";

@Component({
  selector: 'app-home-techs',
  standalone: true,
  imports: [TechnologyAreaComponent],
  templateUrl: './home-techs.component.html',
  styleUrl: './home-techs.component.scss'
})
export class HomeTechsComponent {

}
