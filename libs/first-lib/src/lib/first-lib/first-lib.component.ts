import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModel } from '@myorg/first-lib-api';

@Component({
  selector: 'lib-first-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-lib.component.html',
  styleUrl: './first-lib.component.css',
})
export class FirstLibComponent {
  common = input<CommonModel>();
}
