import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iramen, IserverRamen } from './ramen';
import { Iimage, IserverImage } from './image';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class RamenService {
  url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/";
  selectedRamenSubject = new BehaviorSubject({} as Iramen);
  getSelectedRamen(): Iramen {
    return this.selectedRamenSubject.value;
  }
  selectedRamen(ramen: Iramen) {
    this.selectedRamenSubject.next(ramen);
  }

  constructor(private http: HttpClient) { }

  getRamenDetails = (endpoint: string): Observable<Iramen[]> =>
    this.http.get<IserverRamen[]>(this.url + endpoint).pipe(map(
      res => res.map((serverRamen): Iramen => ({
        brand: serverRamen.Brand,
        variety: serverRamen.Variety,
        style: serverRamen.Style,
        country: serverRamen.Country,
        stars: Number.isInteger(serverRamen.Stars) ? serverRamen.Stars : 0,
        topTen: serverRamen['Top Ten'],
      }))
    ));


  getImages = (endpoint: string): Observable<Iimage[]> =>
    this.http.get<IserverImage[]>(this.url + endpoint).pipe(map(
      res => res.map((serverImage): Iimage => ({
        image: serverImage.Image
      }))
    ));

}
