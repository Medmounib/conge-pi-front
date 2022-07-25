import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesEspaceService} from "../../shared/services/categoriesEspace.service";
import {CategoriesEspace} from "../../shared/model/categoriesEspace";

@Component({
  selector: 'app-espace-categorie-add',
  templateUrl: './espace-categorie-add.component.html',
  styleUrls: ['./espace-categorie-add.component.css']
})
export class EspaceCategorieAddComponent implements OnInit {
  categorieEspace : CategoriesEspace;
  constructor(private categoriesEspaceService : CategoriesEspaceService, private router : Router) { }

  ngOnInit(): void {
    this.categorieEspace= new CategoriesEspace();

  }


  save(){
    this.categoriesEspaceService.add(this.categorieEspace).subscribe();
    this.router.navigate(['/back-office/espaces/categorie'])

  }
}
