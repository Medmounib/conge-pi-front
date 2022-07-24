import { Component, OnInit } from '@angular/core';
import {Espace} from "../../shared/model/espace";
import {EspaceService} from "../../shared/services/espace.service";
import {Router} from "@angular/router";
import {categoriesEspaceService} from "../../shared/services/categoriesEspace.service";
import {CategoriesEspace} from "../../shared/model/categoriesEspace";

@Component({
  selector: 'app-add-espace',
  templateUrl: './add-espace.component.html',
  styleUrls: ['./add-espace.component.css']
})
export class AddEspaceComponent implements OnInit {
  espace: Espace;
  categorieList: CategoriesEspace[];

  constructor(private espaceService:EspaceService,private categorieService: categoriesEspaceService, private router : Router) { }

  ngOnInit(): void {
    this.espace= new Espace();
    this.categorieService.getList().subscribe(
      (data: CategoriesEspace[]) => this.categorieList = data
    );
  }

  save(){
    this.espace.image.replace("/assets/img/espaces/", "");
    let image = this.espace.image.replace("C:\\fakepath\\", "");

    this.espace.image = "assets/img/espaces/" + image;
    this.espaceService.add(this.espace).subscribe();
    this.router.navigate(['/back-office/espaces'])

  }

}
