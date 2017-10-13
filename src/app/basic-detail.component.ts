import { Component, OnInit } from '@angular/core';

import { Basic } from './basic';
import { BasicService} from './basic.service';

const BASICS: Basic[] = [
  { name: 'Marius' },
  { name: 'Test' }
];

@Component({
  selector: 'basic-detail',
  templateUrl: './basic-detail.component.html'
})

export class BasicDetailComponent implements OnInit {
  title = 'Basics';
  basics: Basic[];

  constructor(private basicService: BasicService) { }

  getBasics(): void {
    this.basicService
      .getBasics()
      .then(basics => this.basics = basics);
  }

  add(name: string): void {
    if (!name) { return; }
    this.basicService.create(name)
      .then(basic => {
        this.basics.push(basic);
      });
  }

  ngOnInit(): void {
    this.getBasics();
  }

}
