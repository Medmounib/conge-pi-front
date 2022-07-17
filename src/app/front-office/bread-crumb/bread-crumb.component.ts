import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  breadCrumbTitle: string = "Title";
  constructor() { }

  ngOnInit(): void {
  }

}
