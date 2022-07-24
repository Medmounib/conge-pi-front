import {Espace} from "./espace";

export class Event {
  _id: number;
  title: string;
  type: string;
  description: string;
  maxPlacesNumber: number;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  dateStart: Date;
  dateEnd: Date;
  image: string;
  espace: Espace
}
