import { Component, OnInit } from '@angular/core';
import {Espace} from "../../shared/model/espace";
import {EspaceService} from "../../shared/services/espace.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-espace',
  templateUrl: './add-espace.component.html',
  styleUrls: ['./add-espace.component.css']
})
export class AddEspaceComponent implements OnInit {
  espace: Espace;
  constructor(private espaceService:EspaceService, private router : Router) { }

  ngOnInit(): void {
    this.espace= new Espace();
  }

  save(){
    console.log(this.espace)
    this.espaceService.add(this.espace).subscribe();
    this.router.navigate(['/back-office/espaces'])

  }

}
