import { Component } from '@angular/core';
import { PostBoxComponent } from "../../components/post-box/post-box.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
