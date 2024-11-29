import { Component } from '@angular/core';
import { PostBoxComponent } from "../../components/post-box/post-box.component";
import {MatGridListModule} from "@angular/material/grid-list"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostBoxComponent, MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
