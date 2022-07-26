import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Espace} from "../../shared/model/espace";
import {EspaceService} from "../../shared/services/espace.service";
import {ActivatedRoute, Router} from "@angular/router";
import {} from 'googlemaps';
import {AvisEspace} from "../../shared/model/avisEspace";
import {avisEspaceService} from "../../shared/services/avisEspace.service";
import {ReservationService} from "../../shared/services/reservation.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-espace-detail',
  templateUrl: './espace-detail.component.html',
  styleUrls: ['./espace-detail.component.css']
})
export class EspaceDetailComponent implements OnInit {
  starRating = 0;
  showForm: boolean;
  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: google.maps.Map;
  marker : any[];
  espace: Espace;
  avisEspaces: AvisEspace[];
  avis: AvisEspace;
  resForm = this.formBuilder.group({
    name: '',
    phone: '',
    date: '',
    timeStart: '',
    timeEnd: '',
    id: this.route.snapshot.params['id']
  });
  constructor( private espaceService: EspaceService,
               private route: ActivatedRoute,
               private avisEspaceService : avisEspaceService,
               private router : Router,
               private reservService : ReservationService,
               private formBuilder : FormBuilder,
               ) {
    this.espaceService.getById(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.espace = result;
      }
    );
    this.avisEspaceService.getListByEspace(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.avisEspaces = result;
      }
    );
  }

  ngOnInit(): void {
    this.avis = new AvisEspace();
    this.getCoord();

  }

  getCoord(): void {
    this.espaceService.getCoord().subscribe((response: any[])  => {
        this.marker = response;
        const mapProperties = {
          center: new google.maps.LatLng(36.85337982712139, 10.207162582606205),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
        let that = this;
        console.log(this.marker)
      let th = this;
      this.marker.forEach(function(value) {
          if ( value._id == th.espace._id ){
            var marker = new google.maps.Marker({
              position: value,
              map: that.map,
              title: 'markers'
            });
          }
      })
    });
  };
  show(): void {
    this.showForm=true;
  };
  save(){
    this.avis.espace = this.espace;
    this.avisEspaceService.add(this.avis).subscribe();
    // this.router;

  }

  onSubmit(){
    this.reservService.reserveEspace( this.resForm.value).subscribe();
    this.router.navigate(['/espaces'])
  }

}
