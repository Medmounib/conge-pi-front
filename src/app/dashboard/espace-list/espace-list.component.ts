import { Component, OnInit } from '@angular/core';
import {Espace} from "../../shared/model/espace";
import {EspaceService} from "../../shared/services/espace.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-espace-list',
  templateUrl: './espace-list.component.html',
  styleUrls: ['./espace-list.component.css']
})
export class EspaceListComponent implements OnInit {

  espaceList: Espace[];
  constructor(private espaceService: EspaceService,private router : Router) { }

  ngOnInit(): void {
      this.espaceService.getList().subscribe(
        (data: Espace[])=> this.espaceList = data
      );
  }
  addform():void {

    this.router.navigate(['/back-office/espaces/add'])

  }
  delete(id : number, i: number):void {
    if(confirm("Are you sure? ")) {
      this.espaceService.deleteEspace(id).subscribe(
        () => this.espaceList.splice(i, 1)
      );
    }
  }
  updateFrom(id : number):void {
    this.router.navigate(['/back-office/espaces/edit/'+id])
  }
}
