import { Component } from '@angular/core';

import { Basic } from './basic';

const BASICS: Basic[] = [
  { name: 'Marius' },
  { name: 'Test' }
];

@Component({
  selector: 'basic-detail',
  templateUrl: './basic-detail.component.html'
})

export class BasicDetailComponent {
  title = 'Basics';
  basics = BASICS;
}
