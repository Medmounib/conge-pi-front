import { Component, OnInit, ElementRef } from '@angular/core';
import {Espace} from "../model/espace";
import {CategoriesEspace} from "../model/categoriesEspace";
import {EspaceService} from "../services/espace.service";
import {categoriesEspaceService} from "../services/categoriesEspace.service";
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-espace-list',
  templateUrl: './espace-list.component.html',
  styleUrls: ['./espace-list.component.css']
})
export class EspaceListComponent implements OnInit {
  espaceList: Espace[];
  categorieList: CategoriesEspace[];
  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: google.maps.Map;
  markers : any[];

  constructor(private espaceService: EspaceService, private categorieService: categoriesEspaceService) { }
  ngOnInit(): void {
   this.espaceService.getList().subscribe(
      (data: Espace[]) => this.espaceList = data
   );

   this.categorieService.getList().subscribe(
      (data: CategoriesEspace[]) => this.categorieList = data
   );
    this.getCoord();

  }
  getCoord(): void {

    this.espaceService.getCoord().subscribe((response: any[])  => {
        this.markers = response;
        const mapProperties = {
          center: new google.maps.LatLng(36.85337982712139, 10.207162582606205),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
        let that = this;
        console.log(this.markers)
        this.markers.forEach(function(value) {
            var marker = new google.maps.Marker({
              position: value,
              map: that.map,
              title: 'markers'
            });
          }
        )
      }
    );

  }
}
