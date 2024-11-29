import { Component } from '@angular/core';
import { PostBoxComponent } from '../../../components/post-box/post-box.component';

@Component({
  selector: 'app-home-messages',
  standalone: true,
  imports: [PostBoxComponent],
  templateUrl: './home-messages.component.html',
  styleUrl: './home-messages.component.scss'
})
export class HomeMessagesComponent {

}
