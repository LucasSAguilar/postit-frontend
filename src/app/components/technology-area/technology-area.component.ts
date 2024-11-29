import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-area',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './technology-area.component.html',
  styleUrl: './technology-area.component.scss'
})
export class TechnologyAreaComponent {
  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() items: string[] = [];
}
