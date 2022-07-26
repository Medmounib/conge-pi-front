import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoriesEspaceService} from "../../shared/services/categoriesEspace.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-espace-categorie-edit',
  templateUrl: './espace-categorie-edit.component.html',
  styleUrls: ['./espace-categorie-edit.component.css']
})
export class EspaceCategorieEditComponent implements OnInit {
  editEspaceCategorie = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private categoriesEspaceService : CategoriesEspaceService, private router : ActivatedRoute,private rt: Router ) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params['id']);
    this.categoriesEspaceService.getById(this.router.snapshot.params['id']).subscribe(
      (result) => {
        console.log(result)
        this.editEspaceCategorie = new FormGroup({
          title: new FormControl(result.title),
          type: new FormControl(result.type),
          description: new FormControl(result.description),
        });
      }
    );
  }

  collection(){
    this.editEspaceCategorie.value._id = this.router.snapshot.params['id'];
    this.categoriesEspaceService.updateEspace(this.editEspaceCategorie.value).subscribe(
      (data) => this.rt.navigate(['/back-office/espaces/categorie'])
    )
  }
}
