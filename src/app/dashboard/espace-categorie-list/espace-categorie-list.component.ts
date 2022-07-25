import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesEspaceService} from "../../shared/services/categoriesEspace.service";
import {CategoriesEspace} from "../../shared/model/categoriesEspace";

@Component({
  selector: 'app-espace-categorie-list',
  templateUrl: './espace-categorie-list.component.html',
  styleUrls: ['./espace-categorie-list.component.css']
})
export class EspaceCategorieListComponent implements OnInit {

  categorieEspaceList : CategoriesEspace[];
  constructor(private categoriesEspaceService: CategoriesEspaceService,private router : Router) { }

  ngOnInit(): void {
    this.categoriesEspaceService.getList().subscribe(
      (data: CategoriesEspace[])=> this.categorieEspaceList = data
    );
  }
  addform():void {

    this.router.navigate(['/back-office/espaces/categorie/add'])

  }
  delete(id : number, i: number):void {
    if(confirm("Are you sure? ")) {
      this.categoriesEspaceService.delete(id).subscribe(
        () => this.categorieEspaceList.splice(i, 1)
      );
    }
  }
  updateFrom(id : number):void {
    this.router.navigate(['/back-office/espaces/categorie/edit/'+id])
  }
}
