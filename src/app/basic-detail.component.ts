import { Component, OnInit } from '@angular/core';

import { Basic } from './basic';
import { BasicService} from './basic.service';


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
      .then(basics => {
        this.basics = basics;
        console.log(this.basics);
      });
  }

  add(name: string): void {
    if (!name) { return; }
    this.basicService.create(name)
      .then(basic => {
        this.basics.push(basic);
      });
  }

  delete(basic: Basic): void {
    this.basicService.delete(basic._id)
      .then(() => {
        console.log("Deleted: " + basic.name);
        this.getBasics();
      });
  }

  ngOnInit(): void {
    this.getBasics();
  }

}
