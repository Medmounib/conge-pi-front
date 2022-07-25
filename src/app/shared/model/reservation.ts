import {Espace} from "./espace";
import {Event} from "./event";

export class Reservation {
  _id: number;
  title: string;
  type: string;
  date_debut : Date;
  date_fin : Date;
  description  : string;
  status  : string;
  espace : Espace;
  event : Event;
}
