import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/shared/model/reclamation';
import { ReclamationService } from 'src/app/shared/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  recList : Reclamation[];
  constructor(private service : ReclamationService) { }

  ngOnInit(): void {
    this.service.getList().subscribe(
      (data: Reclamation[] ) => this.recList= data
    );
  }
  setTrue(id: string){
    this.service.update(id).subscribe();
    window.location.reload();
  }

}
