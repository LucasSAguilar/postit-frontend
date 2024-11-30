import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-area',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './technology-area.component.html',
  styleUrl: './technology-area.component.scss'
})
export class TechnologyAreaComponent {
  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() items: string[] = [];
  @Input() color: string = '';
}
