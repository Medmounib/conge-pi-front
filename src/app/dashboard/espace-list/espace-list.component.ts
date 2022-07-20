import { Component, OnInit } from '@angular/core';
import {Espace} from "../../shared/model/espace";
import {EspaceService} from "../../shared/services/espace.service";
import {Event} from "../../shared/model/event";

@Component({
  selector: 'app-espace-list',
  templateUrl: './espace-list.component.html',
  styleUrls: ['./espace-list.component.css']
})
export class EspaceListComponent implements OnInit {

  espaceList: Espace[];

  constructor(private espaceService: EspaceService) { }

  ngOnInit(): void {
      this.espaceService.getList().subscribe(
        (data: Espace[])=> this.espaceList = data
      );
  }

}
