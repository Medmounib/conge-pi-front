import { Component, OnInit } from '@angular/core';
import {Espace} from "../../shared/model/espace";
import {CategoriesEspace} from "../../shared/model/categoriesEspace";
import {EspaceService} from "../../shared/services/espace.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {categoriesEspaceService} from "../../shared/services/categoriesEspace.service";

@Component({
  selector: 'app-espace-edit',
  templateUrl: './espace-edit.component.html',
  styleUrls: ['./espace-edit.component.css']
})
export class EspaceEditComponent implements OnInit {
  editEspace = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    heure_debut: new FormControl(''),
    heure_fin: new FormControl(''),
    jour_debut: new FormControl(''),
    jour_fin: new FormControl(''),
    lat: new FormControl(''),
    lng: new FormControl(''),
    description: new FormControl(''),
    categorieEspace: new FormControl(''),
  });
  categorieList: CategoriesEspace[];


  constructor(private espaceService:EspaceService, private router: ActivatedRoute,private categorieService: categoriesEspaceService, private rt: Router) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params['id']);
    this.espaceService.getById(this.router.snapshot.params['id']).subscribe(
      (result) => {
        console.log(result)
        this.editEspace = new FormGroup({
          title: new FormControl(result.title),
          image: new FormControl(result.image),
          heure_debut: new FormControl(result.heure_debut),
          heure_fin: new FormControl(result.heure_fin),
          jour_debut: new FormControl(result.jour_debut),
          jour_fin: new FormControl(result.jour_fin),
          lat: new FormControl(result.lat),
          lng: new FormControl(result.lng),
          description: new FormControl(result.description),
          categorieEspace: new FormControl(result.categorieEspace),
        });
      }
    );
    this.categorieService.getList().subscribe(
      (data: CategoriesEspace[]) => this.categorieList = data
    );
  }

  collection(){
    this.editEspace.value._id = this.router.snapshot.params['id'];
    this.espaceService.updateEspace(this.editEspace.value).subscribe(
      (data) => this.rt.navigate(['/back-office/espaces'])
    )
  }

}
