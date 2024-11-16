import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModel } from '../../../../first-lib-api/src';

@Component({
  selector: 'lib-first-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-lib.component.html',
  styleUrl: './first-lib.component.css',
})
export class FirstLibComponent {
  common = input<CommonModel>()
}
