import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  style1 = {};

  style2 = {
    backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'
  };

  style3 = {
    backgroundColor: '#87d068'
  };
  count = 5;
  dot = true;

  constructor() {
  }

  ngOnInit() {
  }

  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
  }

  toggleShow(): void {
    this.dot = !this.dot;
  }
}

